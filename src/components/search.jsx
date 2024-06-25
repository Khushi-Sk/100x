export default function Search() {

    const base = "bg-searchbar-fill w-96 h-11 py-2.5 pr-60 pl-4 flex items-start rounded-full gap-3 hover:border focus:border focus:border-twitter-blue hover:border-twitter-blue-hover "
    const searchImg =  "bg-[url('.././src/assets/search.png')] bg-no-repeat bg-origin-padding bg-left hover:bg-[url('.././src/assets/search-hover.png')] hover:bg-no-repeat hover:bg-origin-padding hover:bg-left "
    const inputClasses="text-neutral-100 text-base font-normal leading-normal not-italic bg-searchbar-fill outline-none "

    return (
        <>
            <div className={base}>
              <span className="flex w-5 p-px justify-center items-center shrink-0 "> 
                <svg className={searchImg} width={17} height={17}> 
                </svg>
              </span>
              <input type="search" className={inputClasses} placeholder="search" />
            </div>
        </>
    )
}