import { useContext, useEffect } from 'react';
import Button from '../../components/Button'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../../context/FormContext';
import InputField from '../../components/Login/InputField';
import SignupBoard from "../../components/Login/SignupBoard";
import HomePage from '../login';
// import { func } from 'prop-types';
import Date from '../../components/Login/DatePicker';


// function LoginStep() {

//     const navigate = useNavigate()
  
//     return (
//     <>
//       <div className="flex py-3 px-0 items-center gap-5 self-stretch">
//           <svg onClick={() => navigate("/")} xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
//             <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//             <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
//           </svg>
//         <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step 1 of 4</p>
//       </div>

//     </>
//     )
  
// }

function Header() {

return(
  <>
    <h1 className="text-neutral-900 w-60 h-7 font-px-regular text-2xl not-italic font-bold leading-normal">Create your account</h1>
  </>
)
}


function Form() {

  const initialValues = { 
    username: '',
    email: '',
    day: 1,
    month: 'January',
    year: 2006
  };
  const {formData, setFormData} = useContext(FormContext);
  const [user, setUser] = useState(initialValues);
  // const [userError, setUserError] = useState({});
  // const [isSubmit, setIsSubmit] = useState(false)

  const handleChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name] : value})
    console.log(user)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setUserError(validate(user));
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
          setFormData({...formData, ...user})
          console.log(user)
          navigate("/login2")
        }} autoComplete='off'  >
            <SignupBoard stepNum={1} header={"Create your account"} w={'lg'} h={'lg'} navigateTo={"/"} > 
                <InputField legend={'Name'} placeholder={'Name'} name={'username'} type={"text"} value={user.username} onChange={handleChange}/>
                <InputField legend={'Email'} placeholder={'Email'} name={'email'} type={"email"} value={user.email} onChange={handleChange}/>
              
                <div className="flex flex-col items-start gap-2 self-stretch">
                    <div className="text-neutral-50 text-base not-italic font-bold leading-normal">Date of birth</div>
                    <p className=" text-neutral-500 self-stretch text-sm not-italic font-normal leading-normal">
                      This will not be shown publicly. Confirm your own age, even if this account is for a business, a pet, or something else.
                    </p>
                </div>
                
                <Date handleInputChange={handleChange}  />

                <footer className="flex flex-col mt-6 justify-center justify-items-center items-center place-content-center gap-5 self-stretch">
                  <a>
                    <Button size='md' variant='default' wh="medium" disabled={!user.username || !user.email} >Create Account</Button>
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
     
      <div className="bg-100x h-fit pt-10 pb-[87px] px-4 gap-3 flex flex-col items-center justify-center shrink-0 ">
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