
import Button from '../components/Button'
import { Navigate, useNavigate } from 'react-router-dom'

import LoginMain from '../components/Login/Login'
import Login1 from './Login/login1'

import { useContext, useSyncExternalStore } from 'react'

import { useAuth } from '../context/AuthContext'
import {userLogin} from '../services/authService'
import Cookies from 'universal-cookie'


// const URL = "http://localhost:3000/api"


function HomePage() {
    const { setAuthToken } = useAuth();
  // const { user} = useContext(FormContext)
    // const URL = 'https://one00x-react-backend.onrender.com'
    const cookies = new Cookies()
    const navigate = useNavigate()
    const handleLogin = async () => {
   
      const email = "batman@example.com";
      const password = "#1234"; 

      try {
        console.log(setAuthToken.name)
        const response = await userLogin(email, password)
        // save response.token in context
        cookies.set("user_id", response.token, {sameSite:true})
        if (response)  {
           setAuthToken(response.token)
        
          console.log(response)
          console.log(cookies.cookies)
          navigate('/homefeed')
        }
        
      } catch (err) {
        console.log(`There's an error: ${err}`)
      }
      
        
      };
    
  
  return (
      <>
      <div className='bg-neutral-100'>

        <div className='bg-neutral-1000 w-[1440px] lg:h-[787px] h-[700px] opacity-95 inline-flex md:flex lg:flex  justify-center py-5 lg:py-[200px] md:py-[160px] px-[150px] items-center'>
            <LoginMain onSignIn={handleLogin}/> 
        </div>
       </div> 
      </>
  )
}

export default HomePage;
