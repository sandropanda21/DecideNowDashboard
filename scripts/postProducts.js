import {baseUrl} from "./baseUrl.js";

async function PostProducts(data) {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    return  await fetch(`${baseUrl}/categories`, options)
    .then((res)=> res.json())
    .then((data)=>{
         console.log(data)
        alert("sucesso")
    }) 
    .catch((err)=>{
        console.log(err);
    })
}
export {PostProducts}


