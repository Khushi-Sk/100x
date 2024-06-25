import { json, useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import SignupBoard from "../../components/Login/SignupBoard"
import InputField from "../../components/Login/InputField"
import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"
import { URL } from '../../utils/constants'
import Toast from "../../components/homefeed/Toast"
import { useAuth } from "../../context/AuthContext"


function Login4() {

    const navigate = useNavigate()
    const [password, setPassword] = useState('')
    const [showPassword, setShowPassword] = useState(true)

    const [showToast, setShowToast] = useState(false)

    const user = useContext(FormContext)
    const formValues = user.formData
    // console.log(formValues)
    const {setAuthToken} = useAuth()

    const handlePassword = (e) => {
          setPassword({ ...formValues, password: e.target.value})
        }
    
    const reqBody = {username: formValues.username,
                      display_name: formValues.username,
                      email: formValues.email,
                      password: formValues.password,
                      bio: formValues.bio,
                      profile_picture: 'https://a.storyblok.com/f/191576/1200x800/215e59568f/round_profil_picture_after_.webp'
                    }

    const createAccount = async () => {
      console.log(formValues)
      
      const response = await fetch(`${URL.BASE_URL}/${URL.Endpoint.signup}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        } ,
        body: JSON.stringify(reqBody)
      } )

      try {
        if (response.ok) {

            const userData = await response.json()
            console.log(userData)
            console.log(response.headers)
            setAuthToken(userData.token)

            

            setShowToast(true)
            setTimeout( ()=>{
              setShowToast(true)
            }, 4000)
            
            setTimeout( ()=> {
                setShowToast(false)
                navigate("/homefeed");
            }, 5000)
      }

      } catch(err) {
        console.log(`Error: ${err}`)
      }
    }

    function visible() {
        setShowPassword(!showPassword)
    }
    
    return (
      <>
      
    <div className="lg:bg-100x md:bg-100x bg-neutral-1000 lg:h-screen md:h-screen h-screen w-screen flex pt-0 pb-5 px-16 gap-3 flex-col items-start shrink-0">
        
      {/* <div className="flex py-3 px-0 items-center gap-5 self-stretch"> */}
      <div className="flex my-3 py-24 px-0 items-center justify-center gap-5 self-stretch">
          <SignupBoard header={'You’ll need a password'}  stepNum={4} w={'lg'} h={'md'} navigateTo={'/login3'} >
              <div className="flex flex-col items-start self-stretch gap-10">
                  <div className="flex flex-col items-start self-stretch">
                    <p className="text-neutral-500 font-normal text-base not-italic leading-normal">Make sure it’s 8 characters or more</p>
                  </div>

                  <div className="flex flex-col items-start self-stretch">
                    <InputField onChange={handlePassword} legend={'Password'} placeholder={'Password'} name={'password'}  eye={true}
                    type='password' />
                  </div>

                  <footer className="mt-20 flex flex-col justify-end items-center self-stretch gap-5">
                      <div className="mt-[100px] flex justify-center items-center">
                          <Button variant='default' size='md' wh='long' onClick={createAccount} >Next</Button>                
                      </div>
                      {showToast && <Toast text={"Account created Successfully!"}/>}
                  </footer>
              </div>
          </SignupBoard>   
        </div>
      </div>
      </>
    )
  }
  
  export default Login4 