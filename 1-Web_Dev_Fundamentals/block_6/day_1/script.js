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


// function formatDate() {
//   const dates = document.querySelectorAll('input[type="date"]');
//   dates.forEach((item) => {
//     item.addEventListener('change', () => {
//       const date = {
//         day: item.valueAsDate.getDate(),
//         month: item.valueAsDate.getMonth(),
//         year: item.valueAsDate.getFullYear(),
//       };
//       item.value = `${date.day}/${date.month}/${date.year}`;
//     });
//   });

// }

// const href = new URL('http://127.0.0.1:5500/1-Web_Dev_Fundamentals/block_6/day_1/form.html?name=Gabriel+Lima&email=gabrieldl%40alu.ufc.br&cpf=067.035.723&state=Cear%C3%A1&city=Fortaleza&address=Rua+Ministro+Eduardo+Ellery+Barreira&type=casa&abstract=Vamo+la+testar+isso&position=Web+Dev&position-description=Desenvolver+aplica%C3%A7%C3%B5es+web+MAAARAVILHOSAS&starting-date=2020-10-01&leaving-date=2020-11-14');

// console.log(href.searchParams.values());
// console.log(href.searchParams.keys());
// console.log(href.searchParams.forEach((item, key, array) => {
//   console.log(key, item, "---", array);
// }));


function getData() {
  const submitButton = document.querySelector('button[type="submit"]');
  const dataContainer = document.querySelector('.data-container');
  const table = document.createElement('table');
  submitButton.addEventListener('click', (event) => {
    // event.preventDefault();
    const url = new URL(location.href);
    const headerRow = document.createElement('tr');
    const thParam = document.createElement('th');
    thParam.innerText = 'Param';
    const thValue = document.createElement('th');
    thValue.innerText = 'Value';

    headerRow.appendChild(thParam);
    headerRow.appendChild(thValue);
    table.appendChild(headerRow);

    url.searchParams.forEach((value, key) => {
      const newRow = document.createElement('tr');
      const tdParam = document.createElement('td');
      tdParam.innerText = key;
      const tdValue = document.createElement('td');
      tdValue.innerText = value;
      newRow.appendChild(tdParam);
      newRow.appendChild(tdValue);
      table.appendChild(newRow);
    });
  });
  dataContainer.appendChild(table);
}

let a = new Date('2020-12-30');
// console.log(a.toLocaleDateString('pt-br', {timeZone: 'UTC'}));
window.onload = () => {
  loadStates();
  loadCities();
  getData();
}
