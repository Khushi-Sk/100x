import { useNavigate } from "react-router-dom";
import Button from "../../components/Button"
import { useState } from "react";
import SignupBoard from "../../components/Login/SignupBoard";
import InputField from "../../components/Login/InputField";
import { useContext } from "react";
import { FormContext } from "../../context/FormContext";



function Form() {

    const userContext = useContext(FormContext)
    const formValues = userContext.formData
    const Date = `${formValues.day} ${formValues.month} ${formValues.year}`
   
      const handleSubmit = (e) => {
        e.preventDefault()
      }

      const navigate = useNavigate()

    return (
        <>
        <form className="flex flex-col items-center gap-8 self-stretch" autoComplete="off">
            <SignupBoard stepNum={2} header={"Create your account"} w={'lg'} h={'md'} navigateTo={"/login1"} >

                <InputField legend={'Name'} placeholder={'Name'} name={'username'} type={"text"} value={formValues.username} check={true} />
                <InputField legend={'Email'} placeholder={'Email'} name={'email'} type={"email"} value={formValues.email}  check={true} />
                <InputField legend={'Date of Birth'} placeholder={'Date of Birth'} name={'birthdate'}  value={Date} check={true} />
            
                <footer className="flex flex-col justify-end items-center gap-5 self-stretch">
                    <div className="mt-12 mx-5 justify-center flex items-center self-stretch">
                        <a >
                        <Button variant='primary' text='Sign up' wh='medium' size='md' onClick={() => navigate("/login3")} >Sign up</Button>
                        </a>
                    </div>
                </footer> 

            </SignupBoard>

            </form>
        </>
    )

}

function Login2() {

    const navigate = useNavigate()
    return (
      <>
        <div className=" lg:bg-100x md:bg-100x bg-neutral-1000  w-screen h-screen  px-4 gap-3 flex flex-col items-start shrink-0 ">

            <div className="my-3 mx-4 py-24 px-3.5 inline-flex flex-col items-start gap-5 self-stretch">
                <Form/>
            </div>

        </div>
   
      </>
    )
}

export default Login2