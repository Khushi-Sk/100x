


function getTimeofPost(postedAt) {

    const  now = Date.now()
// console.log(now)
    const timeDifference = now - Number(postedAt)

    const second = Math.round(timeDifference/1000)
    const minute = Math.round(second/60)
    const hour = Math.round(minute/60)
    const day = Math.round(hour/24)
    const week = Math.round(day/6)


        if (second < 15) {
        return "just now"
    } else if (second < 60 ) {
        return `${second}s ago`
    } else if (minute === 1 ) {
        return `1 minute ago`
    } else if (minute < 60) {
        return `${minute}m ago`
    } else if (hour < 24 ) {
        return `${hour}h ago`
    } else if (day <= 7) {
        if(day === 1){
            return `${day} day ago`
        }
        return `${day} days ago`
    } else {
        const date = new Date(postedAt)
        const getDate = date.getDate()
        const month = date.toLocaleString('default', {month: 'short'})
        const year = date.getFullYear()
        return `${getDate} ${month} ${year}`
    }}

// console.log(getTimeofPost())


export default getTimeofPost