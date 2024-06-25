// import ComposeTweetHeader from "../../components/CreatePost";
import UserAvatar from "../../components/profile/Avatar";
import { useContext, useState } from "react";
import Button from "../../components/Button";
import {URL} from "../../utils/constants"
import TweetInput from "../../components/ComposeTweet/TweetInput";

import { TweetContext, useTweet } from "../../context/TweetContext";
import { FormContext, useForm } from "../../context/FormContext"
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
// import { v4 as uuidv4} from "uuid";


const tweetCharacterLimit = 280;
let user;

export function Tweet() {

    const { userTweets, setUserTweets} = useTweet();
    // const [postedAt, setPostedAt] = ;

    const [tweetText, setTweetText] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    // console.log(formData)
    
    const navigate = useNavigate()

    const cookies = new Cookies()

    const handleTweet = async () => {

        setIsLoading(true);
        const newTweetId = Math.round(Math.random() * (100000 - 1000) + 1) + 1000 
        const reqBody =  {
            content:tweetText,
            user_id: cookies.get('user_id'),
            type: 'post',
            postedAt: new Date()
        }
        const response = await fetch(`${URL.BASE_URL}/${URL.Endpoint.post}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(reqBody)
        })

        
        try{
            
            if (response.ok) {
                const responseJson = await response.json()
                const postDeatails = await responseJson['post_details']
                console.log(postDeatails)
                const id = postDeatails.userId
                console.log(id)
            }
  
        } catch (err) {
            console.log(`Error: ${err}`)
        }
        

        await new Promise((resolve) => setTimeout(resolve, 1000));
        // console.log(userTweets)

        const newTweet = {
            id:newTweetId,
            // username: userTweets.username, 
            // handle: userTweets.handle,
            tweetText,
        //    postedAt: timestamp,
            // comments: 0,
            // likes: 0,
            // retweets: 0,
            // isLiked: false, 
            // isRetweeted: false
        }
        await setUserTweets([...userTweets, newTweet]);

       
        setTweetText("");
        setIsLoading(false);
        navigate("/homefeed")
    }

    const handleLike = (tweetId) => {
        const updatedTweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                return {...tweet, likes: tweet.likes + 1}
            }
            return tweet;
        })
        setTweets(updatedTweets);      
    }

    const handleRetweet =(tweetId) => {
        const newRetweets = tweets.map((tweet) => {
            if (tweet.id === tweetId) {
                return {...tweet, retweets: tweet.retweets + 1}
            }
            return tweet;
        })
        setTweets(newRetweets)
    }
        const tweetLimit  = tweetText.length > tweetCharacterLimit
    return (
    <>
        <div className=" inline-flex h-96 w-[512px] py-2.5 px-4 flex-col justify-between items-center shrink-0 rounded-2xl"> 
            <main className="m-0 p-0">
                <div className="flex w-[482px] flex-col justify-center items-start gap-3 ">
                    <div className=" py-3 px-0 flex gap-32 items-center self-stretch">
                        <img src="../../src/assets/cross.png" onClick={() => navigate("/homefeed")} />
                    </div>
                    <div className="flex items-start gap-3 self-stretch">
                        <UserAvatar image={'img1'} size={'md'} />
                        <div className=" w-[434px] flex items-center self-center mt-6 ">
                            <TweetInput tweetText={tweetText} setTweetText={setTweetText} />
                        </div>
                    </div>                 
                </div>                
            </main>

            <footer className="border-t-neutral-800 border-t w-full py-3 px-0 flex justify-between items-center ">
                <p className="text-neutral-500 font-normal text-base not-italic leading-normal">
                    <span className={tweetLimit ? "bg-red-400 text-neutral-100" : "text-neutral-500"}>{tweetLimit ? tweetCharacterLimit - tweetText.length : tweetText.length}
                    </span>/280
                </p>
                <Button wh='xSmall' size='md' variant='primary' disabled={tweetLimit || !tweetText} onClick={handleTweet}>
                    {isLoading ? 'Posting' : "Post"}
                </Button>                
            </footer>
        </div>
    </>
    )
}


export default function ComposeTweet() {
    return (<>

        <div className="bg-blue-wash w-[550px] mx-[450px] mt-36 rounded-2xl flex items-center justify-center self-stretch ">
            <div className="flex justify-center items-center">

            </div>
            <Tweet />
        </div>
        </>)
}

