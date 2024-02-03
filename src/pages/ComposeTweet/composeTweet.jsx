// import ComposeTweetHeader from "../../components/CreatePost";
import UserAvatar from "../../components/profile/Avatar";
import { useContext, useState } from "react";
import Button from "../../components/Button";

import TweetInput from "../../components/ComposeTweet/TweetInput";

import { TweetContext } from "../../context/TweetContext";
import { useNavigate } from "react-router-dom";

// import { v4 as uuidv4} from "uuid";


const tweetCharacterLimit = 280;

 function Tweet() {

    const { userTweets, setUserTweets} = useContext(TweetContext);

    const [tweetText, setTweetText] = useState('')
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate()
   

    const handleTweet = async () => {

        setIsLoading(true);
        const newTweetId = Math.round(Math.random() * (100000 - 1000) + 1) + 1000 
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setUserTweets([...userTweets, {
            id:newTweetId,
            postedAt: Date.now(),
            name: 'name',
            handle: 'handle' ,
            tweetText,
            comments: 0, 
            likes: 0,
            retweets: 0,
            views: 0
        }]);

        
        setTweetText("");
        setIsLoading(false);
        navigate("/homefeed")
        // const newTweetObject = { text: tweetText, id: tweets.length + 1, likes: 0, retweets: 0};
        // console.log(newTweetObject)
        // setTweets([...tweets, newTweetObject]);
        // setTweetText('');
        // console.log(setTweets)
        // console.log(setTweetText)
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
                        <img src="../../src/assets/cross.png" />
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
            <Tweet/>
        </div>
        </>)
}
