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





console.log('################ <promise> ######################')
const data = LoadData()
console.log(data)

console.log('################ <.Then> ######################')
LoadData().then(data => console.log(data))


