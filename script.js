

async function fetchJoke(category) {
    const apiUrl = `https://v2.jokeapi.dev/joke/${category}?safe-mode`;

   
    const response = await fetch(apiUrl);
    const data = await response.json();

    const jokeContainer = document.getElementById('joke');

   
    if (data.type === "single") {
        jokeContainer.innerText = data.joke;
    } else if (data.type === "twopart") {
        jokeContainer.innerText = `${data.setup} ... ${data.delivery}`;
    } else {
        jokeContainer.innerText = "Couldn't fetch a joke. Try again!";
    }
}

fetchJoke('Any');




document.querySelector("#programmingBtn").addEventListener("click", function() {
    fetchJoke('Programming');
});

document.querySelector("#punBtn").addEventListener("click", function() {
    fetchJoke('Pun');
});

document.querySelector("#spookyBtn").addEventListener("click", function() {
    fetchJoke('Spooky');
});

document.querySelector("#christmasBtn").addEventListener("click", function() {
    fetchJoke('Christmas');
});

document.querySelector("#miscBtn").addEventListener("click", function() {
    fetchJoke('Misc');
});
