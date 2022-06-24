import '../../node_modules/regenerator-runtime/runtime';
import axios from 'axios';

/**
 * 
 * Integração com Inshorts
 * Github: https://github.com/cyberboysumanjay/Inshorts-News-API (Documentação)
 * 
 */

var Response

const news = () => {
    axios.get('https://inshorts.deta.dev/news?category=technology')
    .then((response) => {
        Response = response;
        dom(Response.data.data, Response.data.success);
    })
    .catch((error) => {
        console.log(error);
    })
}

const request = new news;

/**
 * 
 * Manipulando os dados
 * 
 */

function dom(data, success) {
    
    if(success == true) {
        changeData(data);
    } else if(success == false) {
        console.log("Erro ao recuperar as notícias!");
    }
}

function changeData(data) {

    //console.log(data)

    let change = document.getElementsByClassName('card');

    for (let index = 0; index < change.length; index++) {

        for (let index1 = 0; index < 4; index++) {
            change[index].children[1].children[0].innerHTML = data[index1].title;
            change[index].children[1].children[1].innerText = data[index1].content;
            
        }

        /*data.forEach(element => {
            change[0].children[1].children[0].innerHTML = element.title;
            change[0].children[1].children[1].innerText = element.content;
        });*/

        //change[index].children[1].children[0].innerHTML = "Teste1";
        //change[index].children[1].children[1].innerText = "Teste";
        //change[index].children[1].children[0].innerHTML = "Teste1";
        //change[index].children[1].children[1].innerText = "Teste";
    }
}

changeData()