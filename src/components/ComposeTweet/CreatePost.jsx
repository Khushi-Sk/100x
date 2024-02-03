import Button from "../Button"


function ComposeTweetHeader() {
    return(
        <>
            <div className=" w-screen py-3 px-4 flex justify-between items-center">
                <a href="../home-feed/index.html">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none">
                    <path d="M18 6L6 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6L18 18" stroke="#F9F9F9" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </a>
                <a href="../home-feed/index.html">
                    <Button wh='xSmall' size='md' variant='primary' text='Post'/>
                </a>
            </div>              
        </>
    )
}



// export default ComposeTweetHeader