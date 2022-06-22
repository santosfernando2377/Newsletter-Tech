/**
 * Integração com Inshorts
 * Github: https://github.com/cyberboysumanjay/Inshorts-News-API (Documentação)
 */

let url = 'https://inshorts.deta.dev/news?category=technology';
let response

var request = new XMLHttpRequest();
request.open("GET", url, false);

request.onreadystatechange = () => {
    if(request.readyState == 4 && request.status == 200) {
        response = JSON.parse(request.response);
        console.log(response);
    }
}

request.send();



/**
 * 
 * Manipulação dos elementos
 * 
 */

var cards = document.getElementsByClassName('card');

for (let index = 0; index < cards.length; index++) {
    console.log(cards[index].childNodes.values);
    
}