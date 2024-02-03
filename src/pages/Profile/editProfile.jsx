import Arrow from "../../assets/profiles/arrow-left.png"
import ProfileCam from "../../assets/profiles/User Avatar Cam.png";
import Cover from "../../assets/profiles/image 17.png"
import Camera from '../../assets/profiles/Camera.png'
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

function User({camera, cover, profileCam}) {

    return(
      <>
      <div className="flex flex-row w-full gap-5 shrink-0">
          <div className="static w-full h-1/3 " id="cover picture">
            <img className="w-full max-h-96 h-1/4 " src={cover} alt="cover picture edit" />
            <div className="relative items-center justify-center flex w-full h-full m-3 gap-5" id="edit cover image options">
              <div className="bg-black opacity-60"> 
                <img className="w-7" src={camera} />
              </div>
              <div className="bg-black opacity-60">
                <svg className=" rounded-full" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                  <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>   
            </div> 
          </div>  
        </div>
    
        <div>
          <img className="inline-flex justify-center items-center m-3" src={profileCam} alt="edit profile picture" />
        </div>
        <div className=" mx-10 w-5/6">
          <div className="flex ab flex-col w-2/3 mx-10 my-2 pr-5">
            <fieldset className="group border-neutral-700 border py-3 px-4 flex items-center self-stretch gap-2.5 rounded focus-within:border-twitter-blue hover:border-twitter-blue-hover ">
              <legend className="text-neutral-500 px-2 group-hover:text-twitter-blue-hover">Name</legend>
              <input className="bg-black group-focus-within:text-neutral-50 focus:outline-none" placeholder="Name" />
            </fieldset>
          </div>
          <div className="flex flex-col w-2/3  mx-10  my-2 pr-5">
            <fieldset className="group border-neutral-700 border py-3 px-4 flex items-center self-stretch gap-2.5 rounded  focus-within:border-twitter-blue hover:border-twitter-blue-hover">
              <legend className="text-neutral-500 px-2 group-hover:text-twitter-blue-hover">Bio</legend>
              <textarea placeholder="Digital Goodies Team - Web & Mobile UI/UX development; Graphics; Illustrations" rows={3} cols={30} className="bg-black group-focus-within:text-neutral-50 focus:outline-none" defaultValue={""} />
            </fieldset>
          </div>
          <div className="flex flex-col w-2/3 mx-10  my-2 pr-5 ">
            <fieldset className="group border-neutral-700 border py-3 px-4 flex items-center self-stretch gap-2.5 rounded  focus-within:border-twitter-blue hover:border-twitter-blue-hover">
              <legend className="text-neutral-500 px-2 group-hover:text-twitter-blue-hover">Location</legend>
              <input placeholder="Location" className="bg-black group-focus-within:text-neutral-50 resize-none focus:outline-none" />
            </fieldset>
          </div>
          <div className="flex flex-col w-full mx-10  my-2 pr-5 mb-80">
            <fieldset className="group border-neutral-700 border w-2/3 py-3 px-4 flex items-center self-stretch gap-2.5 rounded  focus-within:border-twitter-blue hover:border-twitter-blue-hover">
              <legend className="text-neutral-500 px-2 group-hover:text-twitter-blue-hover">Website</legend>
              <input placeholder="Website" className="bg-black group-focus-within:text-neutral-50 focus:outline-none" />
            </fieldset>
          </div>
        </div>
      </>
    )
}

function editProfile() {

    const navigate = useNavigate()
    return (
        <>
    <div className="bg-neutral-1000">
      <div className="flex w-screen py-0 px-4 bg-black flex-col items-start self-stretch gap-3">
        <div className=" py-3 px-0 flex justify-between items-center self-stretch">
          <div className="flex items-center gap-5">
              <img src={Arrow} onClick={() => navigate('/profile')} />
            
            <p className="text-neutral-50 text-base font-bold not-italic leading-normal">Edit profile</p>
          </div>
            <Button variant="default" wh="xSmall" size="md" onClick={() => navigate('/profile')}  >Save</Button>
        </div>
        <User camera={Camera} profileCam={ProfileCam} cover={Cover} />
    </div>
  </div>

        </>
    )
}

export default editProfile;