import { useNavigate } from "react-router-dom"
import Button from "../../components/Button"
import SignupBoard from "../../components/Login/SignupBoard"
import InputField from "../../components/Login/InputField"
import { useContext, useState } from "react"
import { FormContext } from "../../context/FormContext"

function Login3() {

    const [verified, setVerified] = useState(false)
    const navigate = useNavigate()
    const user  = useContext(FormContext)
    const formValues = user.formData
    console.log(formValues)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if (!verified) {
            setVerified(false)
        }
        navigate("/login4")
    }

    return (
      <>

        <div className="lg:bg-100x md:bg-100x bg-neutral-1000 flex w-screen h-screen pt-0 pb-5 px-16 gap-3 flex-col items-start shrink-0">

        <form className="flex justify-center items-center mx-96" onSubmit={handleSubmit}>
            <div className="flex my-3 py-24 px-0 items-center justify-center gap-5 self-stretch">
                <SignupBoard  stepNum={3} header={"We sent you a code"} w={'lg'} h={'md'} navigateTo={"/login2"} >
                    <div className="flex flex-col items-start self-stretch gap-10">
                        {/* <div className="flex flex-col items-start  self-stretch gap-3"> */}
                            <div className="flex flex-col items-start self-stretch gap-3">
                                <p className="text-neutral-500 font-normal text-base not-italic leading-normal">Enter it below to verify your 
                                <br/> Email: {formValues.email}</p>
                            </div>
                        {/* </div> */}

                        <div className="flex flex-col items-end self-stretch gap-3">
                            <InputField legend={'Verification code'} placeholder={'Verification code'} name={'verify number'} hide={true} type={"number"} 
                            /> {/* value={user.password}  */}
                            <p className="text-twitter-blue text-right text-base not-italic font-normal leading-normal">Didn’t receive a code?</p>
                        </div>

                        <footer className="mt-20 flex flex-col justify-end items-center self-stretch gap-5">
                            <div className="mt-10 flex justify-center items-center">
                                <Button variant='default' size='md' wh='long' >Next</Button>
                            </div>
                        </footer>
                    </div>
                </SignupBoard>
            </div>
        </form>
            
            
        </div>
      </>
    )
}

export default Login3