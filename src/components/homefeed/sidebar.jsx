import { useNavigate } from "react-router-dom"
import Button from "../Button"
import UserAvatar from "../profile/Avatar"

export default function SideBar({handleBg}){

    const navigate = useNavigate()
    

    return(
        <>
            <div className=" hidden lg:inline-flex md:inline-flex sm:w-[110px] md:w-[180px] lg:w-[200px] p-5 sm:ml-0 md:ml-4 lg:ml-20 flex-col justify-between items-start shrink-0 ">
                <div>
                    {/* 100x logo */}
                    <div className="flex py-3 px-5 items-end gap-0.5 self-stretch">
                        <img  src="../../src/assets/login/100.png" />
                        <img  src="../../src/assets/x.png" />
                    </div>
                
                    {/* home  */}
                    <div className=" py-3 px-5 items-center gap-5 self-stretch flex ">
                        <img src="../../src/assets/home.png"  onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium hidden lg:block ">Home</p>
                    </div>
                    {/* profile  */}
                    <div className="py-3 px-5 items-center gap-5 self-stretch flex " >
                        <img src="../../src/assets/interactions/icons8-search-50.png" width={20} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium hidden lg:block">Explore</p>
                    </div>

                    <div className="py-3 px-5 items-center gap-5 self-stretch flex " >
                        <img src="../../src/assets/interactions/icons8-notification.gif" width={20} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium  hidden lg:block">Notifications</p>
                    </div>

                    <div className="py-3 px-4 items-center gap-5 self-stretch flex " >
                        <img src="../../src/assets/interactions/bookmark.png" width={26} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium hidden lg:block">Bookmarks</p>
                    </div>

                    <div className="py-3 px-5 items-center gap-5 self-stretch flex  " >
                        <img src="../../src/assets/login/Group 27162.png" width={16} onClick={() => navigate("/homefeed")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium hidden lg:block">Premium</p>
                    </div>

                    <div className="py-3 px-5 items-center gap-5 self-stretch flex  " >
                        <img src="../../src/assets/profile.png" onClick={() => navigate("/profile")} />
                        <p className="text-neutral-50 font-px-regular text-lg font-medium  hidden lg:block">Profile</p>
                    </div>

                    {/* post button  */}
                    <div className="flex py-4 px-0 flex-col items-start gap-2.5 ">
                        <Button variant="primary" wh="large" size="md" onClick={handleBg} >Post</Button>
                    </div>

                </div>
                

                {/* username tag  */}
                <div className="flex justify-between items-center self-stretch mt-[250px]">
                    <div className="flex items-start gap-3">
                        <UserAvatar size={'sm'} image={'img1'} onClick={() => navigate("/profile")}/>
                        <div className="flex flex-col flex-start">
                            <p className="text-neutral-50 sm:hidden md:block">Khushi Sukar</p>
                            <p className="text-neutral-50 sm:hidden md:block">@khushi_sukar</p>
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