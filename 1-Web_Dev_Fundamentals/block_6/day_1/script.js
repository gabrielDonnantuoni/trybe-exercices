function loadStates() {
  const stateList = document.querySelector('#state');
  estadosCidades.forEach((item) => {
    const option = document.createElement('option');
    option.value = item.nome;
    option.innerText = item.nome;
    stateList.appendChild(option);
  });
  stateList.addEventListener('change', loadCities);
};

function loadCities() {
  const cities = document.querySelector('#cities');
  for (let index = cities.children.length - 1; index >= 0; index -= 1) {
    cities.children[index].remove();
  }
  estadosCidades.forEach((item) => {
    const stateList = document.querySelector('#state');
    if (item.nome === stateList.value) {
      item.cidades.forEach((city) => {
        const option = document.createElement('option');
        option.value = city;
        cities.appendChild(option);
      });
    }
  });
};

window.onload = () => {
  loadStates();
  loadCities();
}

