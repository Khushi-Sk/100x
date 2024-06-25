import React, { useContext, useState } from "react";

export const TweetContext = React.createContext()

const tweetData = [{
    id :6,
    username: 'khushi sukar',
    handle:'khushisukar',
    postedAt: '3h',
    tweetText: "All is well",
    comments: 0,
    likes: 0,
    retweets: 0,
    views: 0,
    isLiked: false,
    isRetweeted: false
,
    id :2,
    username: 'khushi sukar',
    handle:'khushisukar',
    postedAt: 1211111,
    tweetText: "I'm not addicted to coffee. It's just my way of life",
    comments: 0,
    likes: 0,
    retweets: 0,
    views: 0,
    isLiked: false,
    isRetweeted: false
}]


export function TweetProvider({ children }) {

    const [userTweets, setUserTweets] = useState([{
        // username: 'User',
        // handle:'user_handle',
        postedAt: 1711992900111,
        tweetText: "Hey Tweet Buddies!",
        // comments: 0,
        // likes: 0,
        // retweets: 0,
        // views: 0,
        // isLiked: false,
        // isRetweeted: false
    }])
// tweetValues
    // const tweetValues = 
    return (
    <TweetContext.Provider value={{ userTweets, setUserTweets }} >
        { children }
    </TweetContext.Provider>
    )

}

export const useTweet = () => {
    return useContext(TweetContext)
}