const API_URL = 'https://icanhazdadjoke.com/';

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};

const fillDocumentH2 = (joke) => {
  const jokeContainer = document.getElementById('jokeContainer');
  jokeContainer.innerHTML = joke;
}

const fetchJoke = () => {
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(({ joke }) => fillDocumentH2(joke));
};

window.onload = () => fetchJoke();
