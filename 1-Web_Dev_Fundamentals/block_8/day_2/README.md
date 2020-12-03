## JavaScript ES6 - Higher Order Functions - map e filter

### Exercícios

Dado o arquivo com o array de objetos `books` dentro de `/books.js`:

  1. Complete a função `formatedBookNames()` e passe no(s) teste(s). Crie um array com strings no formato *NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA* e passe no teste.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
  'As Crônicas de Gelo e Fogo - Fantasia - George R. R. Martin',
  'O Senhor dos Anéis - Fantasia - J. R. R. Tolkien',
  'Fundação - Ficção Científica - Isaac Asimov',
  'Duna - Ficção Científica - Frank Herbert',
  'A Coisa - Terror - Stephen King',
  'O Chamado de Cthulhu - Terror - H. P. Lovecraft'
];

function formatedBookNames() {
  // escreva seu código aqui
}

assert.deepEqual(formatedBookNames(), expected_result);
```

  2. Complete a função `nameAndAge()` e passe no(s) teste(s). Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author , com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
  {
    age: 31,
    author: 'Isaac Asimov'
  },
  {
    age: 38,
    author: 'H. P. Lovecraft'
  },
  {
    age: 39,
    author: 'Stephen King'
  },
  {
    age: 43,
    author: 'George R. R. Martin'
  },
  {
    age: 45,
    author: 'Frank Herbert'
  },
  {
    age: 62,
    author: 'J. R. R. Tolkien'
  }
];

function nameAndAge() {
  // escreva seu código aqui
}

assert.deepEqual(nameAndAge(), expected_result);
```

  3. Complete a função `fantasyOrScienceFiction()` e passe no(s) teste(s). Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
 {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
]

function fantasyOrScienceFiction() {
  // escreva seu código aqui
}

assert.deepEqual(fantasyOrScienceFiction(), expected_result);
```

  4. Complete a função `oldBooks()` e passe no(s) teste(s). Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: { name: 'H. P. Lovecraft', birthYear: 1890 },
    releaseYear: 1928
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: { name: 'Isaac Asimov', birthYear: 1920 },
    releaseYear: 1951
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: { name: 'J. R. R. Tolkien', birthYear: 1892 },
    releaseYear: 1954
  }
]

function oldBooks() {
  // escreva seu código aqui
}

assert.deepEqual(oldBooks(), expected_result);
```

  5. Complete a função `fantasyOrScienceFictionAuthors()` e passe no(s) teste(s). Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
  'Frank Herbert',
  'George R. R. Martin',
  'Isaac Asimov',
  'J. R. R. Tolkien'
]

function fantasyOrScienceFictionAuthors() {
  // escreva seu código aqui
}

assert.deepEqual(fantasyOrScienceFictionAuthors(), expected_result);
```

  6. Complete a função `oldBooks()` e passe no(s) teste(s). Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

```
const books = require('./books');
const assert = require('assert');

const expected_result = [
  'O Senhor dos Anéis',
  'Fundação',
  'O Chamado de Cthulhu'
]

function oldBooks() {
  // escreva seu código aqui
}

assert.deepEqual(oldBooks(), expected_result);
```

  7. Complete a função `authorWith3DotsOnName()` e passe no(s) teste(s). Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais (terminam com um ponto).

```
const books = require('./books');
const assert = require('assert');

const expected_result = 'O Senhor dos Anéis';

function authorWith3DotsOnName() {
  // escreva seu código aqui
}

assert.deepEqual(authorWith3DotsOnName(), expected_result);
```
