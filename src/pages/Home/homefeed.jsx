
import UserAvatar from '../../components/profile/Avatar'
import Tab from '../../components/homefeed/Tabs'
import TweetComponent from '../../components/PostComponent'
import Cookies from 'universal-cookie'

import { URL } from '../../utils/constants'
import { TweetContext, useTweet } from '../../context/TweetContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/homefeed/sidebar'
import Trending from '../../components/trending'
import Button from '../../components/Button'



function HomeFeed() {
    
  const cookies = new Cookies()
    // const tweetValues 
    const [posts, setposts] = useState([])
    const  { userTweets }  =  useContext(TweetContext)
    // console.log(tweetInfo.userTweets)
    // const info = tweetInfo
    // console.log([...tweetInfo, tweetInfo.map((twe)=> twe.username)])
    const tweetsDetails = [...userTweets].reverse()
    const navigate = useNavigate()
    // console.log(userTweets)
   

    const [bgColor, setBgColor] = useState("#000000")

    const handlePost = (bgColor) =>{
       setBgColor("#030e17")
       navigate('/compose-tweet')
    } 
    const user_id = cookies.get('user_id')

    const getUser = async () => {
          const resUser = await fetch(`${URL.BASE_URL}/${URL.Endpoint.homefeed}` ,{
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({user_id})
            })
                try{
                  if (resUser.ok) {
                  const jsonRes = await resUser.json()
                  // console.log(jsonRes)
                  const postData = jsonRes.posts
                  setposts(postData.reverse())
                }} catch (err) {
                console.log(`There's an Error. ${err}`)
                }
    }
    
    
    useEffect( () => { getUser() }, [] )


    useEffect(() => { 
        document.body.style.backgroundColor = bgColor
    }, [bgColor]
    )

  
    return (
      <>
        <div className=' w-screen lg:w-screen sm:w-screen md:w-[900px]'>
          <SideBar handleBg={handlePost} />   
          <div className="md:w-[600px] sm:w-[980px] h-screen overflow-y-visible overflow-x-hidden px-px  inline-flex flex-col items-start border-x border-neutral-700">
            <div className='overflow-y-auto overflow-x-hidden'>
              <div className="border-b-neutral-700 border-b flex p-4 mt-3  items-start gap-2.5 self-stretch ">
                <p className=' text-neutral-50 text-lg not-italic font-semibold leading-normal'>Home</p>
              </div>
      
              <div className="border-b-neutral-700 border-b flex justify-center items-center self-stretch">
      
                  <Tab type='forYou' text='For you' />
                  <Tab type='following' text='Following'/>
              </div>

              {/* Post section  */}
            <section className='flex p-4 justify-center items-center gap-3 self-stretch border-b border-neutral-700'>
              <UserAvatar image={"img1"} />
              <input className=' bg-neutral-1000 text-neutral-500 text-lg focus:text-neutral-50 outline-none' placeholder='What’s happening?'></input>
              <div className='flex flex-1 flex-col justify-end items-end gap-2.5 self-stretch '></div>
              <Button variant='primary' wh='sm' size='md' onClick={handlePost} >Post</Button>    
            </section>

            <section>
                {posts.length > 0 &&  posts.map((post) => (
         
                  <TweetComponent
                  key={post.id}
                  id={post.id}
                  username={post.username} 
                  handle={post.handle} 
                  tweetText={post.content}
                  postedAt={new Date(post.postedAt)}
                  comments={post.comments}
                  likes={post.likes}
                  retweets={post.retweets}
                  view={post.view}
                  isLiked={post.isLiked}
                  isRetweeted={post.isRetweeted}
                  
                  />
                ))}
                
               {/* {tweetsDetails.map((tweet) => (
                <TweetComponent key = {tweet.id}
                username = {tweet.username}
                handle = {tweet.handle}
                postedAt= {new Date()}
                comments = {tweet.comment}
                likes = {tweet.likes}
                tweetText = {tweet.tweetText}
                retweets = {tweet.retweets}
                views = {tweet.views} />
              )) }  */}
              
              {/* <Tweet time='10h' name='Name' handle="Handle" tweetcontent="Don't wish for it, work for it." /> */}
            </section>
            
            </div>
           
          </div>
          <div className="inline-flex ml-10 pt-2.5 pb-0 px-5 flex-col items-start gap-4 shrink-0 sm:hidden md:hidden lg:inline-flex ">
            <Trending/>
          </div>
        </div>  
      </>
    )
  }
  
  
export default HomeFeed