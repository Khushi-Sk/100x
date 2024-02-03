
import { URL } from '../utils/constants.js'

// export const userLogin = async (email, password) => {
//     // const BaseUrl = URL.BASE_URL
//     const BaseUrl = 'https://one00x-react-backend.onrender.com'
//     const Endpoint = URL.Endpoint.login
    
//     try{
//       const response = await fetch(`${BaseUrl}/${Endpoint}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({ email, password })
//       })
  
//       if (!response.ok) {
//         alert("Login failed! Invalid credentials");
//         throw new Error(response.statusText);
//       }
//       // console.log(response)
//       const jsonResponse = await response.json();
//       console.log(jsonResponse);  
//     //   navigate("/homefeed")
//     } catch (error){
//       console.log(`Error: ${error}`)
//       // return error;
//         }
//       }