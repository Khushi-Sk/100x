import PropTypes from 'prop-types';

import img1 from '../../assets/User avatar.png'
import img2 from '../../assets/profiles/User avatar.png'
import img3 from '../../assets/profiles/User avatar2.png'
import img4 from '../../assets/profiles/User avatar cam.png'


function UserAvatar({name, image, size, ...rest}) {
    const img = {
        img1: img1,
        img2: img2,
        img3: img3,
        imgcam: img4
    }
    
    const width = {
        sm: 'w-18',
        md: 'w-19',
        lg: "w-20"
    }

    const handle = name ?  
            <span className="text-neutral-50 font-Inter text-base not-italic font-medium leading-normal">{name}
            <span className="text-neutral-500 font-Inter text-base not-italic font-normal leading-normal">@{name} • 10h</span>
        </span>
        : 
        'self-center max-w-20 min-w-18 '
    

    // const handle=(name) => handle ? 
    //     <span className="text-neutral-50 font-Inter text-base not-italic font-medium leading-normal">{name}
    //         <span className="text-neutral-500 font-Inter text-base not-italic font-normal leading-normal">@{name} • 10h</span>
    //     </span>
    //     : 'self-center max-w-20 min-w-18 '
    const classes = `${img[image]} ${width[size]} ${handle} `
    
    // if (handle) {
    //     return 
    // }
    
    return (
        <img src={img[image]} className={classes} {...rest} alt='Profile picture'  />
    )
    
}

UserAvatar.propTypes ={
    image: PropTypes.oneOf(["img1", "img2", "img3", "imgcam"]).isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
}

export default UserAvatar