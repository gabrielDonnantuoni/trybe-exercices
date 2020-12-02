const estudantes = require('./estudantes.js');
const assert = require('assert');

const expectedResult = [
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
];

const getNameAndBestSubject = (arr) => {
  return arr.map((student) => ({ 
    name: student.nome,
    materia: student.materias.reduce((greater, current) => (greater.nota > current.nota) ? greater : current).name,
  }));
};

assert.deepStrictEqual(getNameAndBestSubject(estudantes), expectedResult);
