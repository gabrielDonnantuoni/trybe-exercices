function addDescription(selector,strg) {
    document.querySelector(selector).innerHTML = strg;
}
addDescription('p + p', 'Me vejo como um desenvolvedor completo e realizado com o que estou fazendo \\o/');

addDescription('h1', 'Exercício 5.1 - JavaScript');

function changeBgColor(selector, color) {
    document.querySelector(selector).style.backgroundColor = color;
}
changeBgColor('.main-content', 'rgb(76,164,109)');
changeBgColor('.center-content', 'white')

function changeCaseAll(selector, style) {
    document.querySelectorAll(selector).forEach(element => {
        element.style.textTransform = style;
    });
}

changeCaseAll('p', 'uppercase');

function consoleShowAll(selector) {
    document.querySelectorAll(selector).forEach((item) => {
        console.log(item.innerHTML);
    })
}

consoleShowAll('p');
