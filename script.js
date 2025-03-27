

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



