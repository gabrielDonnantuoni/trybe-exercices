## JavaScript ES6 - Higher Order Functions - reduce

### Exercícios

Utilizando, quando necessário, os arquivos auxiliares:
  * `/books.js` com o array de objetos `books`;
  * `/estudantes.js` com o array de objetos `estudantes`.

Resolva:

  1. Complete a função `getNameAndBestSubject()` e passe no(s) teste(s). Crie uma função usando os dados dos estudantes contidos no array abaixo, para mostrar na tela um relatório que diz em qual matéria o estudante foi melhor.

```
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
  // escreva seu código aqui
};

assert.deepStrictEqual(getNameAndBestSubject(estudantes), expectedResult);

```

  2. Complete a função `flatten()` e passe no(s) teste(s). Dado um array de arrays, transforme em um único array.

```
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

function flatten() {
  // escreva seu código aqui
}

assert.deepStrictEqual(flatten(), ["1", "2", "3", true, 4, 5, 6]);
```

  3. Complete a função `allNames()` e passe no(s) teste(s). Crie uma string com os nomes de todas as pessoas autoras.

```
const books = require('./books');
const assert = require('assert');

function allNames() {
  // escreva seu código aqui
}

assert.deepStrictEqual(allNames(), "Nomes: George R. R. Martin, J. R. R. Tolkien, Isaac Asimov, Frank Herbert, Stephen King, H. P. Lovecraft.");
```

  4. Complete a função `averageAge()` e passe no(s) teste(s).Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

```
const books = require('./books');
const assert = require('assert');

const expectedResult = 43;

function averageAge() {
  // escreva seu código aqui
}

assert.strictEqual(averageAge(), expectedResult);
```

  5. Complete a função `longestNamedBook()` e passe no(s) teste(s). Encontre o livro com o maior nome.

```
const books = require('./books');
const assert = require('assert');

const expectedResult = {
  author: {
    birthYear: 1948,
    name: 'George R. R. Martin'
  },
  genre: 'Fantasia',
  id: 1,
  name: 'As Crônicas de Gelo e Fogo',
  releaseYear: 1991
};

function longestNamedBook() {
  // escreva seu código aqui
}

assert.deepStrictEqual(longestNamedBook(), expectedResult);
```

  6. Complete a função `containsA()` e passe no(s) teste(s). Dado o array de nomes, retorne a quantidade de vezes em que aparecem a letra `a` maiúscula ou minúscula.

```
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  // escreva seu código aqui
}

assert.deepStrictEqual(containsA(), 20);
```

  7. Complete a função `studentAverage()` e passe no(s) teste(s).Agora vamos criar um novo array de objetos a partir das informações abaixo, onde cada objeto terá o formato `{ name: nome do aluno, average: media das notas }`.

```
const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];


function studentAverage() {
  // escreva seu código aqui
}

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

assert.deepStrictEqual(studentAverage(), expected);
```
