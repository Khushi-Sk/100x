import React, { useContext, useState } from "react";



export const FormContext = React.createContext(null)

// const userDetails = [{
//     id :12345,
//     name: 'khushi sukar',
//     handle:'khushisukar',
//     postedAt: '3h',
//     bio: "Full stack developer",
//     day: 1,
//     month: 1,
//     year: 2000,
//     email: "batman@example.com",
//     password:"***********",
//     }
// ]


export function UserProvider({ children }) {
    const [formData, setFormData] = useState({
        username : "",
        email : "",
        day: "",
        month: "",
        year: "",
        verifyDate: "",
        password:"",
        bio: "World"
    })

    const formValue = { formData, setFormData}

    return (
        <FormContext.Provider value={formValue} >
            { children }
        </FormContext.Provider>
    );
}


export const useForm = () => {
    return useContext(FormContext)
}