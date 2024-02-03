import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import SignupBoard from "../../components/Login/SignupBoard"
import InputField from "../../components/Login/InputField"
import { useState } from "react"

function Login4() {

    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)

    function visible() {
        setShowPassword(!showPassword)
    }

    return (
      <>
      
    <div className="bg-100x flex w-screen h-screen pt-0 pb-5 px-16 gap-3 flex-col items-start shrink-0">
        
      {/* <div className="flex py-3 px-0 items-center gap-5 self-stretch"> */}
      <div className="flex my-3 py-24 px-0 items-center justify-center gap-5 self-stretch">
          <SignupBoard header={'You’ll need a password'}  stepNum={4} w={'lg'} h={'md'} navigateTo={'/login3'} >
              <div className="flex flex-col items-start self-stretch gap-10">
                  <div className="flex flex-col items-start self-stretch">
                    <p className="text-neutral-500 font-normal text-base not-italic leading-normal">Make sure it’s 8 characters or more</p>
                  </div>

                  <div className="flex flex-col items-start self-stretch">
                    <InputField  legend={'Password'} placeholder={'Password'} name={'password'}  eye={true}
                    type='password' />
                  </div>

                  <footer className="mt-20 flex flex-col justify-end items-center self-stretch gap-5">
                      <div className="mt-[100px] flex justify-center items-center">
                          <Button variant='default' size='md' wh='long' onClick={() => navigate("/homefeed")} >Next</Button>
                      </div>
                  </footer>
              </div>
          </SignupBoard>   
      </div>
    </div>

      </>
    )
  }
  
  export default Login4 