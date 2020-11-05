function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
const dezHolidays = [24, 25, 31];
const dezFridays = [4, 11, 18, 25];
  
function createMonthDays () {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    
    const dayList = document.querySelector('#days');

    for (let i = 0; i < dezDaysList.length; i += 1) {
        let day = document.createElement('li');
        day.innerText = dezDaysList[i];
        day.classList.add('day');

        for (let h = 0; h < dezHolidays.length; h += 1) {
            if (day.innerText == dezHolidays[h]) {
                day.classList.add('holiday');
            }
        }

        for (let f = 0; f < dezFridays.length; f += 1) {
            if (day.innerText == dezFridays[f]) {
                day.classList.add('friday');
            }
        }

        dayList.appendChild(day);
    }
};

createMonthDays();

function createButton (name, id) {
    const btnContainer = document.querySelector('.buttons-container');
    let newBtn = document.createElement('button');
    newBtn.innerText = name;
    newBtn.id = id;
    
    btnContainer.appendChild(newBtn);
}

createButton('Feriados', 'btn-holiday');

document.querySelector('#btn-holiday').addEventListener('click', () => {
    document.querySelectorAll('.holiday').forEach((item) => {
        item.style.backgroundColor == 'rgb(0, 190, 150)' ? item.style.backgroundColor = 'rgb(238, 238, 238)' : item.style.backgroundColor = 'rgb(0, 190, 150)';
    });
});

createButton('Sexta-feira', 'btn-friday');

document.querySelector('#btn-friday').addEventListener('click', () => {
    document.querySelectorAll('.friday').forEach((item, index) => {
        item.innerText !== 'SEXTOU!' ? item.innerText = 'SEXTOU!' : item.innerText = dezFridays[index];
    });
});

document.querySelectorAll('#days li').forEach((item) => {
    item.style.transition = '.5s';
    item.addEventListener('mouseenter', () => {
        item.style.fontSize = '30px';
    });
    item.addEventListener('mouseleave', () => {
        item.style.fontSize = '20px';
    });
    item.addEventListener('click', () => {
        item.style.color == document.querySelector('.selected').style.backgroundColor ? item.style.color = 'rgb(119, 119, 119)' : item.style.color = document.querySelector('.selected').style.backgroundColor;
    });
});

function createTask(taskName, taskColor) {
    const name = document.createElement('span');
    name.innerText = taskName;
    const color = document.createElement('div');
    color.style.backgroundColor = taskColor;
    const breaky = document.createElement('p');
    breaky.innerHTML = '<br>';

    document.querySelector('.my-tasks').appendChild(name);
    document.querySelector('.my-tasks').appendChild(color);
    document.querySelector('.my-tasks').appendChild(breaky);

}

createTask('Projeto', 'green');

createTask('Softskills', 'blue');

document.querySelectorAll('.my-tasks div').forEach((item, index, arr) => {
    item.addEventListener('click', () => {
        if (item.className.includes('selected')) {
            item.classList.remove('selected');
        } else {
            for (let i = 0; i < arr.length; i += 1){
                arr[i].classList.remove('selected');
            }
            item.classList.add('selected');
        }
    });
});

document.querySelector('#btn-add').addEventListener('click', () => {
    const input = document.querySelector('#task-input');
    const newItem = document.createElement('li');
    if (input.value == '') {
        alert('Você precisa escrever algo para adicionar');
    } else {
        newItem.innerText = input.value;
        document.querySelector('.task-list').appendChild(newItem);
    }
});

document.querySelector('#task-input').addEventListener('keydown', (event) => {
    const newItem = document.createElement('li');
    if (event.which == 13) {
        if (event.target.value == '') {
            alert('Você precisa escrever algo para adicionar');
        } else {
            newItem.innerText = event.target.value;
            document.querySelector('.task-list').appendChild(newItem);
        }
    }
})
