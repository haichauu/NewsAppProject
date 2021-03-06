


const convertUTCToLocal = (utcString) => {
    const localTime = new Date(utcString)

        const dateTime = localTime.getDate().toString().padStart(2, '0')
        const month = (localTime.getMonth() + 1 ).toString().padStart(2, '0')
        const year = localTime.getFullYear().toString()
        const hour = localTime.getHours().toString().padStart(2, '0')
        const minute = localTime.getMinutes().toString().padStart(2, '0')
        return dateTime + '/' + month + '/' +  year
        + ' at ' + hour + ':' + minute
}

const consoleApp = (data, string) => {
    if(__DEV__) {
        console.log(data, string)
    }
    return null
}

export default {
    convertUTCToLocal,
    consoleApp
}

