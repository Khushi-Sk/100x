import PropTypes from "prop-types";
import { useState } from "react";


function InputField({header, legend, placeholder, name, value, type, show=false, check=false, hide=false, ...rest }) {

    const checkMark = check ? <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#00BE74" />
</svg> : ""

    // show password and hide password
    const [showPassword, setShowPassword] = useState(false)
    function visible() {
        setShowPassword(!showPassword)
    }

    // hide arrow for input type=number
    const hideArrow = hide ? "[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" : ""

    const inputClass = "bg-neutral-1000 text-neutral-50 text-xl py-2 border-none group-focus-within:text-neutral-50 focus:outline-none"

    const classes = `${hideArrow} ${inputClass}`
    return (
        <>
            <fieldset className="group border-neutral-500 border py-0 px-3 flex justify-between items-center gap-2.5 self-stretch rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover">
                <legend className="text-neutral-500 py-0 px-2  flex items-center justify-center group-focus-within:text-twitter-blue group-hover:text-twitter-blue-hover">
                    <div className="px">{legend}</div>
                </legend>
                <input className={classes} name={name} value={value} placeholder={placeholder} type={showPassword ? "text": type} {...rest}  />
                {checkMark}
                {type === "password" && (<button onClick={visible}>
                {showPassword ? 
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#b9c1c9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#b9c1c9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                 : 
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M2 12C2 12 5 5 12 5C19 5 22 12 22 12C22 12 19 19 12 19C5 19 2 12 2 12Z" stroke="#33414f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="#33414f" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                }
                </button>)}
            </fieldset>

            {/* <fieldset className="  ">
                <legend className=" py-0 px-1 gap-2.5 ">Date of Birth</legend>
                    <input className="font-normal leading-normal not-italic "placeholder="Date of Birth" />
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" fill="#00BE74" />
                </svg> */}
            {/* </fieldset> */}

        </>
    )
}

InputField.propTypes = {
    legend: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.string
}



export default InputField