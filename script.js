
console.log("JavaScript file is loaded and running!");

function fetchJoke (){
fetch ('https://v2.jokeapi.dev/joke/Any?safe-mode')
.then (response => response.json())
.then (jokeData =>{
    const jokeContainer = document.getElementById('joke-container');

    if(jokeData.type === 'single') {
        jokeContainer.innerText = jokeData.joke;
    } else if (jokeData.type ==='twopart'){
        jokeContainer.innerHTML = 
        `<p class="setup">${jokeData.setup}</p>` +
        `<p>...</p>` + 
        `<p class="delivery">${jokeData.delivery}</p>`;
    }
    })
}
fetchJoke();