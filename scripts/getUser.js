
import { baseUrl } from "./baseUrl.js";

async function getUser() {
    const option = {
        method: "GET",
        headers: {"Content-Type": "application/json"
        },
    }
    const totalDeUsuarios = await fetch(`${baseUrl}/users`, option)
    .then((res)=> res.json())
    .then((data)=> {
        return data;
    })
    .catch((error)=> console.log(error));
   return totalDeUsuarios
}

export { getUser }