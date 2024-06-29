import { baseUrl } from "./baseUrl.js";

async function getProject() {
  const Option = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  };

  const projectData = await fetch(`${baseUrl}/projects`,Option)
    .then((res) => res.json())
    .then((data) => {
      
  //     const arrayFiltrado = filterElement( data , criterio)
  //     const criterio = "Informática"  
  // console.log(arrayFiltrado);
 
      return data
    })
    .catch((err) => console.log(err));
    // return projectData;

 return projectData
}
// getProject()

export{getProject}

  // function filterElement(data , criterio) {
  //    return data.filter((ele) => ele.course === criterio )
  // }