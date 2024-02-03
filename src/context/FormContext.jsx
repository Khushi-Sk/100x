import React, { useContext, useState } from "react";



export const FormContext = React.createContext()

const userDetails = [{
    id :12345,
    name: 'khushi sukar',
    handle:'khushisukar',
    postedAt: '3h',
    bio: "Full stack developer",
    day: 1,
    month: 1,
    year: 2000,
    email: "batman@example.com",
    password:"#1234",
    }
]


export function UserProvider({ children }) {
    const [formData, setFormData] = useState(userDetails)

    return (
        <FormContext.Provider value={{formData, setFormData}} >
            { children }
        </FormContext.Provider>
    );
}
