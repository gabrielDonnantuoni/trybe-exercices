const switchXPer = (toSwitch) => {
  const stringArr = 'Trybe x aqui!'.split('');
  for (let index = 0; index < stringArr.length; index += 1) {
    if (stringArr[index] === 'x') {
      stringArr[index] = toSwitch;
    }
  }
  return stringArr.join('');
};

const skills = ['HTML', 'CSS', 'JS', 'GIT', 'LINUX'];

const function2 = (phrase) => {
  phrase = `${phrase}\nMinhas cinco principais habilidades são:\n`;
  skills.sort();
  for (let index = 0; index < skills.length; index += 1) {
    phrase = `${phrase} * ${skills[index]}\n`;
  }
  return phrase;
};

console.log(function2(switchXPer('Gabriel')));
