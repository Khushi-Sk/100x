import PropTypes  from 'prop-types';

import CommentLogo from "../assets/interactions/comment.png"
import LikeLogo from "../assets/interactions/heart.png"
import RetweetLogo from "../assets/interactions/retweet.png"
import ShareLogo from "../assets/interactions/share.png"


function Interactions({like=0, comment=0, retweet=0, views=0}) {

    return (
    <>

        <div className="flex justify-center items-center gap-1">
          
            <img className="w-4" src={CommentLogo} />
            <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
              {comment}
            </span>
        </div>
        
        <div className="flex justify-center items-center gap-1">
          <img className="w-4" src={LikeLogo} />
          <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
            {like}
          </span>
        </div>

        <div className="flex justify-center items-center gap-1">
          <img className="w-4" src={RetweetLogo} />
          <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
            {retweet}
          </span>
        </div>

        <div className="flex justify-center items-center gap-1">
          <svg className="text-neutral" width={13} height={15} fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.971558" y="5.81122" width="1.71429" height="9.14287" fill="#737373" />
            <rect x="4.40027" y="0.0969849" width="1.71429" height="14.8572" fill="#737373" />
            <rect x="7.82874" y="8.09692" width="1.71429" height="6.85715" fill="#737373" />
            <rect x="11.2573" y="3.52551" width="1.71429" height="11.4286" fill="#737373" />
          </svg>
          <span className="text-neutral-500 font-Inter text-sm not-italic leading-normal ">
            {views}
          </span>

        </div>

        <div className="flex justify-center items-center gap-1">
          <img className="w-4" src={ShareLogo} />
        </div>

    </>)
    
}

Interactions.propTypes = {
    like : PropTypes.number, 
    comment : PropTypes.number, 
    retweet : PropTypes.number, 
    views : PropTypes.number, 
}

export default Interactions