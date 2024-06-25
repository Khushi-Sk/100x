import { useState, useContext, Children } from "react";
import {
    createBrowserRouter,
    RouterProvider, Navigate, useNavigate
  } from "react-router-dom";


import HomePage from "./pages/login";
import Login1 from "./pages/Login/login1";
import Login2 from "./pages/Login/login2";
import Login3 from "./pages/Login/login3";
import Login4 from "./pages/Login/login4";
import HomeFeed from "./pages/Home/homefeed";
import ModalContent from "./components/Modal";
import ComposeTweet from "./pages/ComposeTweet/composeTweet";
import Search from "./components/search";
import Trending from "./components/trending";
import Profile from "./pages/Profile/profile";
import PostComponent from "./components/PostComponent";
import EditProfile from "./pages/Profile/editProfile";
import LikeLogo from "./assets/interactions/heart.png"
import RetweetLogo from "./assets/interactions/retweet.png"
import SignupBoard from "./components/Login/InputField"

import { TweetProvider } from "./context/TweetContext";
import { UserProvider } from "./context/FormContext";
import { AuthProvider, useAuth } from "./context/AuthContext";


const ProtectedRoute = ({children}) => {
    const {authToken} = useAuth();
    const navigate = useNavigate()
    return authToken ? children : <Navigate to='/' />
}

const router = createBrowserRouter([
    {
        path: '/',
        element : <HomePage />
    },
    {
        path: '/login1',
        element : <Login1 />
    },
    {
        path: '/login2',
        element : <Login2 /> 
    },
    {
        path: '/login3',
        element : <Login3 /> 
    },
    {
        path: '/login4',
        element : <Login4 />
    },
    {
        path: '/homefeed',
        element :  (<ProtectedRoute>
                        <HomeFeed />
                    </ProtectedRoute>)
    },
    {
        path: '/compose-tweet',
        element : <ComposeTweet/>
    },
    {
        path: '/profile',
        element : <Profile />
    },
    {
        path: '/profile-edit',
        element : <EditProfile />
    }
])

// function TwitterApp() {
//     const { isLoggedIn } = useContext(AuthContext);
//     return <>{isLoggedIn ? <HomeFeed/> : <HomePage/>  } </>
// }

function App() {
    return (
        <AuthProvider>
            <UserProvider>
                <TweetProvider>
                    <RouterProvider router={router} />      
                </TweetProvider> 
            </UserProvider>
        </AuthProvider>
        
    )
}

export default App