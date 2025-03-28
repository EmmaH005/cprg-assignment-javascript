

async function fetchJoke(category) { //Note for future use: async allows javascript to handle multiple functions at once without slowing down the whole page//
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?safe-mode`; //In order to call upon whatever category I need, insert template literal//

    const response = await fetch(apiUrl); 
    const data = await response.json();  
    const jokeContainer = document.getElementById('joke');

    
    if (data.type === "single") {
        jokeContainer.innerText = data.joke;
    } else if (data.type === "twopart") {
        jokeContainer.innerText = data.setup + " ... " + data.delivery; 
    }
}

//Note: Allows the webpage to generate a random "Joke Of The Day"//
fetchJoke('Any');



    
const h1 = document.querySelector ("h1");


document.getElementById("programmingBtn").addEventListener("click", function() {
    fetchJoke('Programming');
    h1.textContent = "Programming Joke"
});

document.getElementById("punBtn").addEventListener("click", function() {
    fetchJoke('Pun');
    h1.textContent = "Random Pun"
});

document.getElementById("spookyBtn").addEventListener("click", function() {
    fetchJoke('Spooky');
    h1.textContent = "Spooky Joke"
});

document.getElementById("christmasBtn").addEventListener("click", function() {
    fetchJoke('Christmas');
    h1.textContent = "Christmas Joke"
});

document.getElementById("miscBtn").addEventListener("click", function() {
    fetchJoke('Misc');
    h1.textContent = "Misc Joke"
});






