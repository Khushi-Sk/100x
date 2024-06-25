import { useContext, useEffect } from 'react';
import Button from '../../components/Button'
import { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { FormContext } from '../../context/FormContext';
import InputField from '../../components/Login/InputField';
import SignupBoard from "../../components/Login/SignupBoard";
import HomePage from '../login';
// import { func } from 'prop-types';
import Date from '../../components/Login/DatePicker';
import Toast from '../../components/homefeed/Toast'



function Form() {

  const initialValues = { 
    username: '',
    email: '',
    day: 1,
    month: 'January',
    year: 2006
  };
  const {formData, setFormData} = useContext(FormContext);
  // const [user, setUser] = useState(initialValues);
  // const [userError, setUserError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} =  e.target;
    setFormData({...formData, [name] : value})
    console.log(formData)
  }

  // const accountCreated = async () => {
  //   await setTimeout(<Toast text={'Account has been successfully created'}/>, 2000  )
  //   (!disabled) ? navigate("/login2"): navigate('/login1')
  // }

  const handleSubmit = async (e) => {
    await e.preventDefault()
    setUserError(validate(formData));
    setIsSubmit(true)
  }

  const navigate = useNavigate()
  // useEffect(() => {
  //   console.log(userError)
  //   if (Object.keys(userError).length === 0 && isSubmit) {
  //     console.log(user)
  //   }
  // }, [user])

  // const validate = (values) => {
  //   const error = {}
  //   const regex = /^[^\s@]+ @[^\s@]+\.[^\s@]{2,}$/i;

  //   if (!values.name) {
  //     error.username = "Username is required";
  //   } 
  //   if (!values.email) {
  //     error.email = "Email is required";
  //   }
  //   return error;
  // };

  return (
    <>
    <div>
        <form className="flex flex-col items-center justify-center gap-8 self-stretch" 
        onSubmit={(e) => {
          e.preventDefault();
          setFormData({...formData})
          if (!formData.username || !formData.email) {
           
            console.log('Fill in the details.')
              
          } 
          console.log(formData)
          navigate("/login2")
        }} 
        autoComplete='off'  >
            <SignupBoard stepNum={1} header={"Create your account"} w={'lg'} h={'lg'} navigateTo={"/"} > 
                <InputField legend={'Name'} placeholder={'Name'} name={'username'} type={"text"} value={formData.username} onChange={handleChange}/>
                <InputField legend={'Email'} placeholder={'Email'} name={'email'} type={"email"} value={formData.email} onChange={handleChange}/>
              
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="text-neutral-50 text-base not-italic font-bold leading-normal">Date of birth</div>
                    <p className=" text-neutral-500 self-stretch text-sm not-italic font-normal leading-normal">
                      This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                </div>
                
                <Date handleInputChange={handleChange} />

                <footer className="flex flex-col mt-6 justify-center justify-items-center items-center place-content-center gap-5 self-stretch">
                  <a>
                    <Button size='md' variant='default' wh="medium" disabled={(!formData.username || !formData.email )} onSubmit={()=> <Toast/>}
                     >Create Account</Button>
                  </a>
                </footer>
              
            </SignupBoard >
            

        </form>
    </div>
    </>
  )
}

function Login1() {
  // const [count, setCount] = useState(0)

  return (
    <>
     
      <div className="lg:bg-100x md:bg-100x bg-neutral-1000 h-screen pt-10 lg:pb-[87px] md:pb-[87px] px-4 gap-3 flex flex-col items-center justify-center shrink-0 ">
          {/* <LoginStep  /> */}
          <div className="my-3 flex flex-col items-center justify-center gap-5 self-stretch">
            {/* <Header/> */}
            <Form/>         
          </div>
      </div>

    </>
  )
}

export default Login1;