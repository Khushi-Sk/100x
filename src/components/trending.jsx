import PropTypes from "prop-types";

import Search from "./search"
function Topic({topic, noOfPosts}) {
  
  return (
    <>
    <div className="w-96 py-2.5 px-4 gap-4 flex items-start">   
      <span className="flex flex-col items-start gap-1.5">
        <p className="text-neutral-500 text-sm font-normal leading-normal not-italic ">Trending</p>
        <span className="pl-64  ml-20 mt-0 pt-0 pb-0 mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" width={16} height={5} viewBox="0 0 16 5" fill="none">
            <path d="M4 2.5C4 1.4 3.1 0.5 2 0.5C0.9 0.5 0 1.4 0 2.5C0 3.6 0.9 4.5 2 4.5C3.1 4.5 4 3.6 4 2.5ZM6 2.5C6 3.6 6.9 4.5 8 4.5C9.1 4.5 10 3.6 10 2.5C10 1.4 9.1 0.5 8 0.5C6.9 0.5 6 1.4 6 2.5ZM12 2.5C12 3.6 12.9 4.5 14 4.5C15.1 4.5 16 3.6 16 2.5C16 1.4 15.1 0.5 14 0.5C12.9 0.5 12 1.4 12 2.5Z" fill="#525252" />
          </svg>
        </span>
        <p className="text-neutral-50 text-base font-normal leading-normal not-italic ">#{topic}</p>
        <p className="text-neutral-500 text-sm font-semibold  leading-normal not-italic ">{noOfPosts} posts</p>     
      </span>
    </div>
    </>
  )
}

function Trending() {

    return (
      <>
  {/* <div className="bg-searchbar-fill w-96 h-11 py-2.5 pr-60 pl-4 flex items-start rounded-full border-2 gap-3 ">
    <span className="flex w-5 p-px justify-center items-center shrink-0 "> <svg width={17} height={17} viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="Group">
          <path id="Vector" d="M16.0447 15.2053L13.1472 12.3078C14.1962 11.0649 14.8335 9.461 14.8335 7.70825C14.8335 3.77367 11.6431 0.583252 7.7085 0.583252C3.77391 0.583252 0.583496 3.77367 0.583496 7.70825C0.583496 11.6428 3.77391 14.8333 7.7085 14.8333C9.46204 14.8333 11.0652 14.1968 12.3065 13.147L15.204 16.0445C15.3204 16.1601 15.4732 16.2187 15.6236 16.2187C15.774 16.2187 15.9284 16.1609 16.0432 16.0445C16.2767 15.8125 16.2767 15.4373 16.0447 15.2053ZM1.771 7.70825C1.771 4.43471 4.43495 1.77075 7.7085 1.77075C10.982 1.77075 13.646 4.43471 13.646 7.70825C13.646 10.9818 10.982 13.6458 7.7085 13.6458C4.43495 13.6458 1.771 10.9818 1.771 7.70825Z" fill="#737373" />
        </g>
      </svg>
    </span>
    <p className="text-neutral-600 text-base font-normal leading-normal not-italic ">search </p>
  </div> */}
      <div className="hidden lg:block md:hidden sm:hidden">
          <Search />

          <div className=" bg-neutral-800 rounded-2xl mt-6">
            <div className="py-2.5 px-4 flex items-center gap-2.5 self-stretch rounded-2xl">
              <p className="text-neutral-50 text-2xl font-semibold  leading-normal not-italic ">What's happening</p>
            </div>
            
            <Topic  noOfPosts={2345} topic='indVsPak'/>
            <Topic  noOfPosts={2563} topic='Madurai' />
            <Topic  noOfPosts={2563} topic='IndiaWinsWorldCup' />

            <div className=" p-4 flex items-start self-stretch text-twitter-blue">Show more</div>
          </div>
      </div>
        
      {/* </div> */}

    </>
    )
}

Topic.propTypes = {
  topic: PropTypes.string.isRequired ,
  noOfPosts: PropTypes.number.isRequired,
}

export default Trending