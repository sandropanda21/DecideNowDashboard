import { getBaseUrl } from "./getProducts.js";
import {getUser} from "./getUser.js";
import { getProject } from "./integration.js"
import { rankingVotes } from "./ranking.js";
import { pegarCursos } from "./getCourse.js";


// \rankingVotes()

// const userPosition = document.querySelector('.userPosition')
const projectName = document.querySelector('.projectName')
// const totalVotes = document.querySelector('.totalVotes')

const totaldeProjectos = document.querySelector('#totalDeProjectos')
const totalDeExpositores = document.querySelector("#totalDeExpositores")



async function inserirValores(){
    const projects =  await getProject();
    totaldeProjectos.innerHTML = projects.length
  
    pegarCursos()

    // const total = await getBaseUrl()
    // totalDeExpositores.innerHTML = total.length
  


    // inserirValores()

    
}

inserirValores()

const Tbody = document.querySelector('tbody')

async function trocarValores() {
    const projects =  await rankingVotes();
      let count = 1
    for (const projectos of projects) {
      
        const inserir = `
        <td class="userPosition">${count}</td>
        <td class="projectName">${projectos.name_project}</td>
                <td class =" course ">${projectos.course}</td>
                <td class="totalVotes">${projectos.votes}
                </td>
        
        `;
        Tbody.innerHTML += inserir;
        count++;
        
    }   
}
trocarValores()











