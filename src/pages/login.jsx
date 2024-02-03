
import Button from '../components/Button'
import { useNavigate } from 'react-router-dom'

import LoginMain from '../components/Login/Login'
import Login1 from './Login/login1'

import { useContext } from 'react'
// import { userLogin } from '../services/authService'
import { FormContext } from '../context/FormContext'

const URL = `https://one00x-react-backend.onrender.com`
// const URL = "http://localhost:3000/api"


function HomePage() {
  // const { user} = useContext(FormContext)
  
    const handleLogin = async () => {
   
          const response = await fetch(`${URL}/login`, {
            method: "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({
              email: "batman@example.com",
              password: "gothamrocks"
            })
        })
        if (!response.ok) {
            alert("Login failed! Invalid credentials")
            new Error(response.statusText)
        }
        const jsonRes = await response.json()
        console.log(jsonRes)
      }
    
  
  return (
      <>
      
        <div className='bg-black w-[1440px] h-[799px] opacity-95 inline-flex justify-center py-[200px] px-[150px] items-center'>
            <LoginMain onSignIn={handleLogin}/> 
        </div>
        
      </>
  )
}

export default HomePage;
