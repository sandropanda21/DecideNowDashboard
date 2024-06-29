

import { baseUrl } from "./baseUrl.js";
var recebe = ""
var totalDeUsuarios = document.querySelector("#totalDeExpositores")
var totalDeUsuariosEletronica = document.querySelector("#totalDeUsuarios")
var totalDeCantinhos = document.querySelector("#totalDeCantinhos")
var totalDePraticasLaboratoriais = document.querySelector("#totalDePraticasLaboratoriais")
 

async function pegarCursos(){
    const option = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }
    const getUrl = await fetch(`${baseUrl}/ranking/exhibitor`, option)
    .then((res) => res.json()).then((data) =>{
       const filteredINFo = filterArray(data , "Informática")/*declarar dados*/
       const filteredINFoEletronica = filterArray(data , "Eletrónica")/*declarar dados*/
       const filteredINFoCantinhoTecnologico = filterArray(data , "Cantinho Tecnológico")/*declarar dados*/
       const filterdINfoPraticaDeLabotorias = filterArray(data ,"Práticas Laboratoriais")

        // return  filteredINFo;
        // recebe = filteredINFo
        // console.log(recebe);
        actualizarFront(filteredINFo)
        actualizarFrontEletronica(filteredINFoEletronica)
        actualizarFrontCantinho(filteredINFoCantinhoTecnologico)
        actualizarFrontPraticaDeLabotorias(filterdINfoPraticaDeLabotorias)
        return data
       
    }).catch((error) =>console.log(error))
    return getUrl ;
}

function filterArray(array_ ,  criterio){

    const newArray = array_.filter(data => data.course == criterio)
  
    return newArray
  
}
function actualizarFront(filteredINFoEletronica){
    // console.log(filterArray);
  totalDeUsuarios.innerHTML = filteredINFoEletronica.length

}

function actualizarFrontEletronica(filteredINFoEletronica){
    // console.log(filterArray);
  totalDeUsuariosEletronica.innerHTML = filteredINFoEletronica.length

}

function actualizarFrontCantinho(filteredINFoCantinhoTecnologico){
    // console.log(filterArray);
    totalDeCantinhos.innerHTML = filteredINFoCantinhoTecnologico.length
 
}
function actualizarFrontPraticaDeLabotorias(filterdINfoPraticaDeLabotorias){
    totalDePraticasLaboratoriais.innerHTML = filterdINfoPraticaDeLabotorias.length
    console.log(totalDePraticasLaboratoriais)
}



 export { pegarCursos }


  