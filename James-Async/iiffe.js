const axios = require('axios');

const LoadData = async () => {
    try {
        const url = `https://jsonplaceholder.typicode.com/posts/1`
        const res = await axios.get(url)
        const data = res.data
        //console.log(data)
        //console.log(JSON.stringify(data))
        return data

    } catch (error) {
        console.log(error)
    }
}

( async () => {
    console.log('################ <use IIFE> ######################')
})();

( async () => {
    const data = await LoadData()
    console.log(data)
})();



