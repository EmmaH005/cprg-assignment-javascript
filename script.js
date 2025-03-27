

async function fetchJoke(category) { //Note for future use: async allows javascript to handle multiple functions at once without slowing down the whole page//
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

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


document.getElementById("programmingBtn").addEventListener("click", function() {
    fetchJoke('Programming');
});

document.getElementById("punBtn").addEventListener("click", function() {
    fetchJoke('Pun');
});

document.getElementById("spookyBtn").addEventListener("click", function() {
    fetchJoke('Spooky');
});

document.getElementById("christmasBtn").addEventListener("click", function() {
    fetchJoke('Christmas');
});

document.getElementById("miscBtn").addEventListener("click", function() {
    fetchJoke('Misc');
});






