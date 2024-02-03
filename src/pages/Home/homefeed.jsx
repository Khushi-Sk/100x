import img1 from '../../assets/User avatar.png'
import img2 from '../../assets/profiles/User avatar.png'
import img3 from '../../assets/profiles/User avatar2.png'
import img4 from '../../assets/profiles/User avatar cam.png'

import UserAvatar from '../../components/profile/Avatar'
import Tab from '../../components/homefeed/Tabs'
import Interactions from '../../components/interactions'
import PostComponent from '../../components/PostComponent'
import Tweet from '../../components/PostComponent'

import { TweetContext } from '../../context/TweetContext'
import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from '../../components/homefeed/sidebar'
import Trending from '../../components/trending'
import Button from '../../components/Button'
import ComposeTweet from '../ComposeTweet/composeTweet'


function HomeFeed() {

    const tweets = useContext(TweetContext);
    const tweetsDetails = [...tweets.userTweets].reverse();
    const navigate = useNavigate()

    const [bgColor, setBgColor] = useState("#000000")

    const handlePost = (bgColor) =>{
      setBgColor("#030e17")
      navigate('/compose-tweet')
    } 

    useEffect(() => { 
        document.body.style.backgroundColor = bgColor
    }, [bgColor]
    )

    return (
      <>
      <div className=' h-screen '>
          <SideBar handleBg={handlePost} />   
          <div className="w-[600px] h-screen overflow-y-visible overflow-x-hidden px-px  inline-flex flex-col items-start border-x border-neutral-700">
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
              <Button variant='primary' wh='sm' size='md' >Post</Button>    
            </section>

            <section>
              {tweetsDetails.map((tweet, index) => (
                <Tweet key={index} {...tweet} />
              )) }
              {/* <Tweet time='10h' name='Name' handle="Handle" tweetcontent="Don't wish for it, work for it." /> */}
            </section>
            
            </div>
           
          </div>
          <div className="inline-flex ml-10 pt-2.5 pb-0 px-5 flex-col items-start gap-4 shrink-0 ">
            <Trending/>
          </div>
        </div>  
      </>
    )
  }
  
  
export default HomeFeed