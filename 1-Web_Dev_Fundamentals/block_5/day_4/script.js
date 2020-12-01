let storages = {
    //tirar reference e substituir por value
    bkgdColor: {name: 'bkgdColor', element: document.getElementById(this.bkgdColor.name), reference: document.querySelectorAll('body')},

    textColor: {name: 'textColor', element: document.getElementById(this.textColor.name), reference: document.querySelectorAll('h2 , p')},

    fontSize: {name: 'fontSize', element: document.getElementById(this.fontSize.name), reference: document.querySelectorAll('p')},

    letterSpacing: {name: 'letterSpacing', element: document.getElementById(this.letterSpacing.name), reference: document.querySelectorAll('p')},

    fontFamily: {name: 'fontFamily', element: document.getElementById(this.fontFamily.name), reference: document.querySelectorAll('header, section')},
}

for (let key in storages) {
    storages[key].element.addEventListener('change', () => {
        localStorage.loremIpsium = JSON.stringify(storages);

    });
}

const arrow = document.querySelector('.arrow')
arrow.addEventListener('click', () => {
    arrow.classList.toggle('clicked');
    document.querySelector('aside').classList.toggle('hidden');
});

function loadStorage() {
    const loadedStorage = JSON.parse(localStorage.loremIpsium);
    
    // document.querySelector('body').style.backgroundColor = 
}

// window.onload = () => {
//     function updateStorage() {
//         if () 
//     }
// }