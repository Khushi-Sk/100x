function Tab({text, type}) {

    const base = ' text-neutral-400 flex flex-col justify-center items-center pb-4 gap-4 '
    const active = 'active:text-neutral-50 active:border-twitter-blue focus:text-neutral-50 focus-within:border-twitter-blue focus-within:border-b-4 '
    
    const tab ={
    forYou : 'w-[55px]',
    following: 'w-[69px]'
    } 
    
    const classes = `${base} ${active} ${tab[type]}`
    
    return (
            <>
                <div className=' self-stretch flex flex-col justify-center items-center  pt-5 px-[150px] w-52  gap-4 hover:bg-neutral-900'>
                  <button  className={classes}>
                    {text}
                  </button>  
                </div>           
            </>
        )
    }

export default Tab