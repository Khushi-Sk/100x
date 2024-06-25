import { useNavigate } from "react-router-dom"

export default function SignupBoard ({stepNum, w, h, header, children, navigateTo}){

    const width = {
        xl: "lg:w-[600px] md:w-[500px] w-80",
        lg: 'lg:w-[512px] md:w-[412px] w-96'


    }
    const height = {
        lg: "lg:h-[650px] md:h-[650px] h-[650px]",
        md: "lg:h-[550px] md:h-[550px] h-[550px]"
    }
   
    const base = "bg-neutral-1000 inline-flex py-3 px-3 flex-col items-start gap-3 rounded-none md:rounded-2xl lg:rounded-2xl "
    const classes = `${width[w]} ${height[h]} ${base}`
    const navigate = useNavigate()

    return(<>
        <div className={classes} >

            {/* step */}
            <div className="flex py-3 px-4 items-center gap-5">
                <svg onClick={() => navigate(navigateTo)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>

                <p className="text-neutral-50 text-base not-italic font-bold leading-normal">Step {stepNum} of 4</p>
            </div>
            
            {/* header */}
            <div className="flex py-0 px-7 flex-col items-start gap-5 self-stretch">
                
                <h1 className="text-neutral-50 h-7 font-px-regular text-2xl not-italic font-bold leading-normal">{header}</h1>
               
                {/* Input field */}
                <div className="flex flex-col items-center gap-8 self-stretch">
                    {children}
                </div>
            </div>
        </div>

    </>)
    
    
}