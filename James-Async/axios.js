const { default: axios } = require('axios')



const retrieve = async()=> {
    const url = `https://jsonplaceholder.typicode.com/posts/1`
    res =  await axios.get((url))
    data = res.data
    //console.log(data)
    return data
    
}
/*
console.log("Result")
retrieve().then(data=>{console.log(data)})
*/


( async()=>{
    result = await retrieve()
    console.log("IIEF RESULT")
    console.log(result)
})();