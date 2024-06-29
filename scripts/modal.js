import {PostProducts} from "./PostProducts.js";

const form = document.querySelector('#form')
const name = document.querySelector("#name")


form.addEventListener('submit', async (e){
    e.preventDefault()

    const data = {
        name : name.value
    }

    await PostProducts(data)

})  





// import {baseUrl} from "./baseUrl.js";

// async function PostProducts() {
//     const options = {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             name : '',
//         }),
//     }
//     const fetchReceave = await fetch(`${baseUrl}/categories`, options)
//     .then((res)=> res.json())
//     .then((data)=>{
//          console.log(data)
//     }) 
//     .catch((err)=>{
//         console.log(err);
//     })
// }
// PostProducts()


