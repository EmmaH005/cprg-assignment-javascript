


function getjoke() {
fetch('https://v2.jokeapi.dev/joke/Any?safe-mode')
.then(response => response.json())
.then(data => {
    const setup=data.setup;
    const delivery=data.delivery;

    document.getElementById('setup').textContent = setup;
    document.getElementById('delivery').textContent = delivery;
 })

}


window.onload = getJoke;
