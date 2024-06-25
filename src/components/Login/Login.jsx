import Button from "../Button"
import { useNavigate } from "react-router-dom"

function LoginMain({onSignIn}) {
    const navigate = useNavigate()
    // const handler = async () => {
        // const response = await fetch("https://one00x-react-backend.onrender.com/login", {
        //     method: "POST",
        //     headers : {
        //       "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify({
        //       email: "batman@example.com",
        //       password: "gothamrocks"
        //     })
        // })
        // if (!response.ok) {
        //     alert("Login failed! Invalid credentials")
        //     new Error(response.statusText)
        // }
        // const jsonRes = await response.json()
        // console.log(jsonRes)

        // navigate("/homefeed")
    // } 

    
    return (
    <>
            <div className="lg:flex md:flex w-96 lg:w-screen md:w-fit h-96 my-2 items-center gap-[100px]">
                {/* 100 X logo */}
                <div className="flex justify-center items-end gap-[2px] mb-14">
                    <svg className="w-[44px] md:w-[300px] lg:w-[456px] md:h-[150px] lg:h-[199px] h-[19px] " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 456 199" fill="none">
                        <path d="M82.5397 2.63452V195.331H47.4177V36.6009H46.2817L0.935547 65.3924V33.4019L49.1218 2.63452H82.5397Z" fill="#F9F9F9"/>
                        <path d="M203.431 199C187.843 199 174.463 195.08 163.292 187.239C152.184 179.335 143.632 167.95 137.637 153.084C131.704 138.155 128.738 120.184 128.738 99.1707C128.801 78.1573 131.799 60.2802 137.731 45.5395C143.727 30.736 152.279 19.4452 163.387 11.6671C174.557 3.88905 187.906 0 203.431 0C218.957 0 232.305 3.88905 243.476 11.6671C254.647 19.4452 263.199 30.736 269.131 45.5395C275.127 60.343 278.125 78.22 278.125 99.1707C278.125 120.247 275.127 138.249 269.131 153.178C263.199 168.044 254.647 179.398 243.476 187.239C232.368 195.08 219.02 199 203.431 199ZM203.431 169.55C215.549 169.55 225.11 163.622 232.116 151.767C239.184 139.849 242.719 122.317 242.719 99.1707C242.719 83.8654 241.109 71.0065 237.891 60.5939C234.672 50.1812 230.128 42.3404 224.258 37.0714C218.389 31.7396 211.447 29.0738 203.431 29.0738C191.377 29.0738 181.847 35.0328 174.841 46.9508C167.836 58.8061 164.302 76.2128 164.239 99.1707C164.175 114.539 165.722 127.46 168.877 137.936C172.096 148.411 176.64 156.315 182.51 161.646C188.379 166.915 195.353 169.55 203.431 169.55Z" fill="#F9F9F9"/>
                        <path d="M381.242 199C365.653 199 352.274 195.08 341.103 187.239C329.995 179.335 321.443 167.95 315.448 153.084C309.515 138.155 306.549 120.184 306.549 99.1707C306.612 78.1573 309.61 60.2802 315.542 45.5395C321.538 30.736 330.09 19.4452 341.197 11.6671C352.368 3.88905 365.717 0 381.242 0C396.768 0 410.116 3.88905 421.287 11.6671C432.458 19.4452 441.01 30.736 446.942 45.5395C452.938 60.343 455.936 78.22 455.936 99.1707C455.936 120.247 452.938 138.249 446.942 153.178C441.01 168.044 432.458 179.398 421.287 187.239C410.179 195.08 396.831 199 381.242 199ZM381.242 169.55C393.36 169.55 402.921 163.622 409.927 151.767C416.995 139.849 420.53 122.317 420.53 99.1707C420.53 83.8654 418.92 71.0065 415.701 60.5939C412.483 50.1812 407.939 42.3404 402.069 37.0714C396.2 31.7396 389.257 29.0738 381.242 29.0738C369.188 29.0738 359.658 35.0328 352.652 46.9508C345.647 58.8061 342.113 76.2128 342.049 99.1707C341.986 114.539 343.533 127.46 346.688 137.936C349.907 148.411 354.451 156.315 360.32 161.646C366.19 166.915 373.164 169.55 381.242 169.55Z" fill="#F9F9F9"/>
                    </svg>
                    <svg className="w-[20px] md:w-[90px] lg:w-[138px] md:h-[100px] lg:h-[146px] h-[15px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 138 146" fill="none">
                        <path d="M20.4141 0.761841L57.8583 62.6961L95.3025 0.761841H114.876L68.1649 73.3809L114.876 146H95.3025L57.8583 86.0515L20.4141 146H0.935547L47.0789 73.3809L0.935547 0.761841H20.4141Z" fill="#F9F9F9"/>
                        <path d="M42.6026 0.761841L80.0468 62.6961L117.491 0.761841H137.064L90.3534 73.3809L137.064 146H117.491L80.0468 86.0515L42.6026 146H23.124L69.2674 73.3809L23.124 0.761841H42.6026Z" fill="#F9F9F9"/>
                    </svg>
                </div>
            
                <div className="flex py-0 px-7 flex-col items-start gap-10 ">
                    <div className="flex flex-col items-start gap-3">
                        {/* {header} */}
                        <h1 className="text-neutral-50 font-Inter text-3xl not-italic font-extrabold leading-normal">
                            Happening now
                        </h1>
                        <p className="text-neutral-50 font-medium leading-normal not-italic text-base">
                            Join today.
                        </p>
                    </div>
                    {/* buttons */}
                    <Button size="lg" variant="default" wh="long" onClick={() => navigate("/login1")} >{"Create Account"}</Button>
                    {/* or */}
                    <div className="flex items-center justify-center gap-1 self-stretch">
                        <hr className="border-neutral-700 flex-grow border-t-2 ml-2" />
                        <span className="text-neutral-50">or</span>
                        <hr className="border-neutral-700 flex-grow border-t-2 mr-2" />
                    </div>
                    {/* button  */}
                    <div className="flex flex-col items-start gap-5 self-stretch">
                        <p className="text-neutral-50">Already have an account?</p>
                        <Button variant="outline" size="lg" wh="long" onClick={onSignIn} >Sign in</Button>
                    </div>

                </div>
            </div>
        
    </>)
    
}

export default LoginMain