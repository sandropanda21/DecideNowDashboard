import { baseUrl } from "./baseUrl.js";


async function getBaseUrl(products) {
  const option = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const esperar = await fetch(`${baseUrl}/exhibitors`, option)
    .then((response) => response.json())
    .then((data) => {
      return data; 
    })
    .catch((error) => console.log(error));
    // return  esperar;
  return esperar;

}
export {getBaseUrl}




