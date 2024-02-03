import { useNavigate } from "react-router-dom"
import Button from "../Button"
import UserAvatar from "../profile/Avatar"

export default function SideBar({handleBg}){

    const navigate = useNavigate()
    

    return(
        <>
            <div className="  inline-flex p-5 ml-20 flex-col justify-between items-start shrink-0 ">
                <div>
                    {/* 100x logo */}
                    <div className="flex py-3 px-5 items-end gap-1 self-stretch">
                        <img  src="../../src/assets/login/100.png" />
                        <img  src="../../src/assets/x.png" />
                    </div>
                
                    {/* home  */}
                    <div className="flex py-3 px-5 items-center gap-5 self-stretch">
                        <img src="../../src/assets/home.png"  onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Home</p>
                    </div>
                    {/* profile  */}
                    <div className="flex py-3 px-5 items-center gap-5 self-stretch" >
                        <img src="../../src/assets/interactions/icons8-search-50.png" width={20} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Explore</p>
                    </div>

                    <div className="flex py-3 px-5 items-center gap-5 self-stretch" >
                        <img src="../../src/assets/interactions/icons8-notification.gif" width={20} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Notifications</p>
                    </div>

                    <div className="flex py-3 px-4 items-center gap-5 self-stretch" >
                        <img src="../../src/assets/interactions/bookmark.png" width={26} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Bookmarks</p>
                    </div>

                    <div className="flex py-3 px-5 items-center gap-5 self-stretch" >
                        <img src="../../src/assets/login/Group 27162.png" width={16} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Premium</p>
                    </div>

                    <div className="flex py-3 px-5 items-center gap-5 self-stretch" >
                        <img src="../../src/assets/profile.png" onClick={() => navigate("/profile")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium ">Profile</p>
                    </div>

                    {/* post button  */}
                    <div className="flex py-4 px-0 flex-col items-start gap-2.5">
                        <Button variant="primary" wh="large" size="md" onClick={handleBg} >Post</Button>
                    </div>

                </div>
                

                {/* username tag  */}
                <div className="flex justify-between items-center self-stretch mt-[250px]">
                    <div className="flex items-start gap-3">
                        <UserAvatar size={'sm'} image={'img1'}/>
                        <div className="flex flex-col flex-start">
                            <p className="text-neutral-50">Khushi Sukar</p>
                            <p className="text-neutral-50">@khushi_sukar</p>
                        </div>

                        <button className=" w-8 h-8 py-0 px-2 flex justify-center items-center">
                            <img src="../../src/assets/Options.png"/>
                        </button>
                                       
                    </div>       
                </div>

            </div>
        </>
    )
}