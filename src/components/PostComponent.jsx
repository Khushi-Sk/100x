
import getTimeofPost from '../utils/timeDate.js'
import { TweetContext, useTweet } from '../context/TweetContext'
import { useContext, useEffect, useState } from 'react';
import { URL } from '../utils/constants.js';
import Cookies from 'universal-cookie';

import Useravatar from '../assets/User avatar.png'
import CommentLogo from "../assets/interactions/comment.png"
import LikeLogo from "../assets/interactions/heart.png"
import liked  from "../assets/interactions/liked.png"
import RetweetLogo from "../assets/interactions/retweet.png"
import ShareLogo from "../assets/interactions/share.png"
import { number } from 'prop-types';
// import { getUser } from '../pages/ComposeTweet/composeTweet.jsx';

function TweetComponent({
    id,
    tweetText, 
    postedAt,
    comments,
    likes, 
    retweets,
    views,
    // isLiked,
    // isRetweeted
    }) {
    
    const [ user, setUser ]  = useState(null);
    const [handle, setHandle] = useState(null);
    const [isLiked, setIsLiked] = useState(false);
    const [likeNumber, setLikeNumber] = useState(0);
    const [isRetweeted, setIsRetweeted] = useState(false);
    const [retweetNumber, setRetweetNumber] = useState(0);


    const cookies = new Cookies()
    

    const getUser = async () => {   
    const response = await fetch(`${URL.BASE_URL}/${URL.Endpoint.user}` ,{
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({user_id: cookies.get("user_id")})
    })
    try {
        if (response.ok) {
            const jsonRes = await response.json()

            const user_id = await jsonRes.userId
            setUser(user_id)
        
        }

    } catch (err) {
        console.log(err)
    }
}
    
// console.log(id)
    const hitLike = async () => {
        const response = await fetch(`${URL.BASE_URL}/${URL.Endpoint.hitLike}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({user_id: cookies.get("user_id"), post_id:id })
        })
                try {
                    if (response.ok) {
                        const jsonRes = await response.json()
                        // console.log(jsonRes.message)
                        if (jsonRes.message !=='Sorry, Like already exists with this user and post.') {
                            setIsLiked(true)
                            
                        } else setIsLiked(false)
                        
                    } 
                } catch (err) {
                    console.log(err)
                }
                getLikes()
    }

    const getLikes = async () =>{
        const postid = id
        const numberOfLikes = await fetch(`${URL.BASE_URL}/${URL.Endpoint.numberOfLikes}/${postid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        try{
            const jsonRes = await numberOfLikes.json()
            // console.log(jsonRes)
            // console.log(id)
            
            const number = await jsonRes.message
            setLikeNumber(number)
            // console.log(likeNumber)
            // number = likes

        } catch(err) {
            console.log(`There's an Error, ${err}`)
        }

    }

    const hitRetweet = async () => {
        const response = await fetch(`${URL.BASE_URL}/${URL.Endpoint.hitRetweet}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({user_id: cookies.get("user_id"), post_id:id })
        })
                try {
                    if (response.ok) {
                        const jsonRes = await response.json()
                        // console.log(jsonRes.message)
                        if (jsonRes.message !=='Sorry, Retweet already exists with this user and post.') {
                            setIsRetweeted(true)
                            
                        } else setIsRetweeted(false)
                        
                    } 
                } catch (err) {
                    console.log(err)
                }
                getRetweets()
    }

    const getRetweets = async () =>{
        const postid = id
        const numberOfRetweets = await fetch(`${URL.BASE_URL}/${URL.Endpoint.numberOfRetweets}/${postid}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    })
        try{
            const jsonRes = await numberOfRetweets.json()
            // console.log(jsonRes)
            // console.log(id)
            
            const number = await jsonRes.message
            setRetweetNumber(number)
            // console.log(likeNumber)
            // number = likes

        } catch(err) {
            console.log(`There's an Error, ${err}`)
        }

    }

    useEffect( () => { getUser(), hitLike(), hitRetweet() }, []) 
 

    return (
        <>
        <div data-tweet-id={id}  className=" box-border flex h-min border-b border-neutral-700 px-4 pb-2 pt-4 w-[598.50px]"> 
            {/* <div className="bg-neutral-1000 border-neutral-700 border-b my-3 py-2 px-4 flex items-start self-stretch gap-4 min-w-screen"> */}
                {/* <UserAvatar image='img1' alt='Profile picture' size='md'/> */}
                <div className="mr-4 h-12 min-w-fit">
                    <img
                    src={Useravatar}
                    alt="User Picture"
                    className="h-12 w-12 rounded-full"
                    />
                </div>
                <div className="text-neutral-50 w-full flex flex-col items-start self-stretch gap-1 ">
                    <span className="text-neutral-50 font-Inter text-base not-italic font-medium leading-normal">{user ? user.username : "Unknown User"}
                        <span className="text-neutral-500 font-Inter text-base not-italic font-normal leading-normal"> @{user ? user.displayName : "user_1"} <span>•</span> {getTimeofPost(postedAt)}</span>
                    </span>
                    <p id="tweet content" className="text-neutral-50 font-Inter text-base not-italic leading-normal font-normal">
                        {tweetText}
                    </p>
                    <div className="flex py-3 px-0 justify-between items-center self-stretch">
                        {/* <Interactions  /> */}
                        <div className="flex justify-center items-center gap-1">
                            <img className="w-4" src={CommentLogo} />
                            <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
                            {comments}
                            </span>
                        </div>
      
                            <button onClick={hitLike } 
                            className={isLiked ? "text-[#F4245E] font-Inter text-sm not-italic leading-normal" : 
                            "text-neutral-500 font-Inter text-sm not-italic leading-normal" } >
                                {!isLiked ? 
                                
                                <img src={LikeLogo} width={18}/>:
                                // <img src={liked} width={20} />
                                <svg
                                width={18}
                                height={18}
                                viewBox="0 0 17 17"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <g id="heart-sv">
                                  <path
                                    id="heart-sv_2"
                                    d="M8.12553 3.88656L7.50083 3.10989C5.77639 0.96597 2.61758 1.31923 1.33173 3.79981C0.711282 4.99675 0.680397 7.42586 1.24936 8.65259C3.16525 12.7834 6.75362 14.7369 7.44153 15.0815C7.51865 15.1201 7.58873 15.1687 7.66137 15.2152C7.98329 15.4213 8.39438 15.3954 8.69387 15.1376C8.75023 15.089 12.8765 13.2347 15.0017 8.65259C15.5707 7.42586 15.5398 4.99675 14.9193 3.79981C13.6335 1.31923 9.94603 0.723394 8.12553 3.88656Z"
                                    fill="#F4245E"
                                    stroke="#F4245E"
                                    strokeWidth="1.5"
                                  />
                                </g>
                              </svg> }  

                            <span className=" font-Inter text-sm not-italic leading-normal ">
                                {isLiked ? likeNumber : likeNumber}
                            </span>

                        </button>

                       {/* retweet  */}
                        <button onClick={hitRetweet} 
                            className={isRetweeted ? "text-[#1FA750] font-Inter text-sm not-italic leading-normal" : 'text-neutral-500 font-Inter text-sm not-italic leading-normal'}
                        > 
                        {!isRetweeted ? (
                        <svg
                            width="21"
                            height="15"
                            viewBox="0 0 21 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="retweet-sv">
                              <path
                                id="Vector 5"
                                d="M3.72097 1.48621L1.56409 3.64312M3.72097 1.48621L5.87787 3.64312M3.72097 1.48621L3.72097 10.7214C3.72097 12.2918 4.99404 13.5649 6.56445 13.5649L11.4858 13.5649"
                                stroke="#525252"
                                strokeWidth="1.42174"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector 4"
                                d="M17.2507 13.5649L19.4076 11.408M17.2507 13.5649L15.0938 11.408M17.2507 13.5649L17.2507 4.32975C17.2507 2.75934 15.9776 1.48627 14.4072 1.48627L9.48585 1.48627"
                                stroke="#525252"
                                strokeWidth="1.42174"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                        </svg>
                        ) : 
                        (<svg
                            width="20"
                            height="15"
                            viewBox="0 0 20 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g id="retweet-sv">
                              <path
                                id="Vector 5"
                                d="M3.15688 1.48621L1 3.64312M3.15688 1.48621L5.31379 3.64312M3.15688 1.48621L3.15688 10.7214C3.15688 12.2918 4.42995 13.5649 6.00037 13.5649L10.9217 13.5649"
                                stroke="#00BE74"
                                strokeWidth="1.42174"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                              <path
                                id="Vector 4"
                                d="M16.6866 13.5649L18.8435 11.408M16.6866 13.5649L14.5297 11.408M16.6866 13.5649L16.6866 4.32975C16.6866 2.75934 15.4136 1.48627 13.8431 1.48627L8.92177 1.48627"
                                stroke="#00BE74"
                                strokeWidth="1.42174"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </g>
                        </svg> )}
                            <span className=" font-Inter text-sm not-italic leading-normal ">
                                {isRetweeted ? retweetNumber : retweetNumber}
                            </span>
                        </button>
                        

                        <div className="flex justify-center items-center gap-1">
                            <svg className="text-neutral" width={13} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="0.971558" y="5.81122" width="1.71429" height="9.14287" fill="#737373" />
                                <rect x="4.40027" y="0.0969849" width="1.71429" height="14.8572" fill="#737373" />
                                <rect x="7.82874" y="8.09692" width="1.71429" height="6.85715" fill="#737373" />
                                <rect x="11.2573" y="3.52551" width="1.71429" height="11.4286" fill="#737373" />
                            </svg>
                            <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
                                {views}
                            </span>
                        </div>

                        <div className="flex justify-center items-center gap-1">
                            <img className="w-4" src={ShareLogo} />
                        </div>

                    </div>
                </div>
            {/* </div> */}
        </div>
        </>
    )
}

export default TweetComponent