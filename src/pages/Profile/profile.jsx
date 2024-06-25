import UserAvatarCam from "../../assets/profiles/User avatar cam.png"
import UserAvatarProfile from "../../assets/User avatar.png"
import Link from "../../assets/profiles/Link Icon.png"
import Add from "../../assets/Add.png"
import Cover from "../../assets/profiles/image 17.png"
import Interactions from "../../components/interactions"
import PostComponent from "../../components/PostComponent"
import Button from "../../components/Button"
import Tweet from "../../components/PostComponent"
import { useNavigate } from "react-router-dom"
import SideBar from "../../components/homefeed/sidebar"
import Trending from "../../components/trending"
import { useState } from "react"
import tweetBox from "../ComposeTweet/composeTweet"

function UserDetails({cover, userProfile, name, handle, bio, link, joinedAt, following, followers}) {
  
  const navigate = useNavigate()
  return(
        <>
            <div className="flex flex-col items-start">
          
              <div className="flex w-[600px] py-3 px-4 items-center gap-5">
                  <img src="../../src/assets/profiles/arrow-left.png" onClick={() => navigate('/homefeed')} />
                  <div className="flex flex-col justify-center items-start gap-0">
                      <p className="text-neutral-50 mx-5 text-xl font-semibold not-italic leading-normal">{name}</p>
                      <p className="text-neutral-500 mx-5 text-base font-normal not-italic leading-normal">@{handle}</p>
                  </div>
              </div>

              {/* cover and profile image  */}
              <div className="relative">
                  <img src={cover} className=" w-[1000px] h-2/3  shrink-0" alt="cover profile picture" />
                  <img onClick={() => navigate("/profile-edit")} className="border-black bg-neutral-200 border-4  p-2 w-20 h-20 -bottom-10 left-2 rounded-full shrink-0 absolute" src={userProfile} alt="user profile picture" />
              </div>

              <div className="flex flex-row items-center justify-center">
                <a className="ml-[440px]">
                  <Button size='md' wh='normal' variant='edit' onClick={() => navigate("/profile-edit")} >Edit profile</Button>
                </a>
              </div>

            </div>
    
        <div className="inline-flex py-0 mb-14 px-px flex-col items-start gap-3">
 
            <div className="flex w-[600px] py-0 px-4 flex-col justify-end items-start gap-3 ">
                {/* user name  */}
                <div className="flex flex-col justify-end items-start gap-1 self-stretch">
                    <p className="text-neutral-50 text-xl font-bold not-italic leading-normal">{name}</p>
                    <p className="text-neutral-500  text-base font-normal not-italic leading-normal">@{handle}</p>
                </div>
          
                <p className="text-neutral-50  text-base font-normal not-italic leading-normal">{bio}</p>
                <div className=" flex flex-row gap-2 items-center self-stretch">
                    <img  src={Link} />
                    <a href='#' className="text-twitter-blue mt-0 text-base ">{link}</a>
                    <img src="../../src/assets/profiles/Calendar-Icon.png" /> 
                    <p className="text-neutral-500 text-base font-medium not-italic leading-normal gap-3">
                      Joined {joinedAt}
                    </p>
                </div>
                <span className="flex flex-row items-center gap-5 justify-start">
                  <p className="text-neutral-500 gap-2.5">
                    <span className="text-blue-100 font-bold">{following} </span>
                    Following
                  </p>
                  <p className="text-neutral-500 gap-2.5 ">
                    <span className="text-blue-100 font-bold">{followers} </span>
                    Followers
                  </p>
                </span>
            </div> 
        </div>
      
      </>
  )
}

function Profile() {
  const navigate = useNavigate()
  
  const [post, setPost] = useState(false)

  const handlePost = () => {
      setPost(true)
      // if (setPost) {
      //   return<>
      //     <div className="flex justify-center items-center">
      //         <tweetBox />
      //     </div>  </>
      // }
  }
 
    return (
        <>
        <div className="bg-neutral-1000 h-[801px] w-screen overflow-hidden inline-flex">
           <SideBar onClick={handlePost}/>
            <div className=" w-[600px] h-screen overflow-y-visible overflow-x-hidden px-px inline-flex flex-col items-start border-x border-neutral-700">
                <div className='overflow-y-auto '>
                  
                    <div id="profile-bio" className=" inline-flex w-screen flex-col justify-end items-start gap-4">
                      <UserDetails cover={Cover} userProfile={UserAvatarProfile} name='Khushi Sukar' handle='khushi_sukar' joinedAt=' september 2018 '
                      bio=' Digital Goodies Team - Web &amp; Mobile UI/UX development; Graphics; Illustrations' 
                      link=' pixsellz.io' followers='118' following='217' />
                      <Tweet name='Khushi Sukar' handle='khushi_sukar' postedAt={"11"} tweetText='All is well !!'/>
                      <Tweet name='khusshi' handle='Khushi_sukar' postedAt='10' tweetText='All is well !!'/>
                      <Tweet name='khusshi' handle='Khushi_sukar' postedAt='6' tweetText='All is well !!'/>
                      <Tweet name='khusshi' handle='Khushi_sukar' postedAt='2' tweetText='All is well !!'/>
                    </div>
                </div>
            </div>

            <div className=" inline-flex ml-10 pt-2.5 pb-0 px-5 flex-col items-start gap-4 shrink-0 ">
                <Trending />
            </div> 
        </div>
        

        </>
    )
}


export default Profile