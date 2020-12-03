## JavaScript ES6 - spread operator, parâmetro rest, destructuring e mais

### Exercícios

  1. Dado o código abaixo, complete-o de forma que seja verificada a área dos 3 retângulos nos testes.

```
const assert = require('assert');

const rectangleArea = (width, height) => width * height;

const rectangle1 = [1, 2];
const rectangle2 = [3, 5];
const rectangle3 = [6, 9];
const rectangles = [rectangle1, rectangle2, rectangle3];

for(rectangle of rectangles) {
    assert.strictEqual(rectangleArea(), rectangle[0]*rectangle[1]) // altere a chamada da funcao rectangleArea
}
```

  2. Crie uma função `sum` que dado um número variável de elementos retorna a soma desses elementos. Passe nos testes.

```
const assert = require('assert');

// escreva sum abaixo

assert.strictEqual(sum(), 0);
assert.strictEqual(sum(1), 1);
assert.strictEqual(sum(1, 2), 3);
assert.strictEqual(sum(1, 2, 3), 6);
assert.strictEqual(sum(1, 2, 3, 4), 10);
```

  3. Escreva a função `personLikes` que, passe nos testes e dado um objeto de parâmetro que representa uma pessoa, retorna todos os gostos daquela pessoa.

```
const assert = require('assert');

const alex = {
    name: "Alex",
    age: 26,
    likes: ["fly fishing"],
    nationality: "Australian"
};

const gunnar = {
    name: "Gunnar",
    age: 30,
    likes: ["hiking", "scuba diving", "taking pictures"],
    nationality: "Icelandic"
};

// complete a assinatura da função abaixo
const personLikes = () => `${name} is ${age} years old and likes ${likes.join(", ")}.`;

assert.strictEqual(personLikes(alex), "Alex is 26 years old and likes fly fishing.");
assert.strictEqual(personLikes(gunnar), "Gunnar is 30 years old and likes hiking, scuba diving, taking pictures.");
```

  4. Escreva uma função `filterPeople` que, passe nos testes e dada uma lista de pessoas, retorna todas as pessoas australianas que nasceram no século 20.

```
const assert = require('assert');

const people = [
    {
        name: "Nicole",
        bornIn: 1992,
        nationality: "Australian"
    },
    {
        name: "Harry",
        bornIn: 2008,
        nationality: "Australian"
    },
    {
        name: "Toby",
        bornIn: 1901,
        nationality: "Australian"
    },
    {
        name: "Frida",
        bornIn: 1960,
        nationality: "Dannish"
    },
    {
        name: "Fernando",
        bornIn: 2001,
        nationality: "Brazilian"
    }
];

// escreva filterPeople abaixo

const filteredPeople = filterPeople(people);

assert.deepStrictEqual(filteredPeople[0], { name: "Nicole", bornIn: 1992, nationality: "Australian" });
assert.deepStrictEqual(filteredPeople[1], { name: "Toby", bornIn: 1901, nationality: "Australian" });
```

  5. Escreva a função `swap`, que passe nos testes e dado um array de 3 ou mais elementos, retorna um novo array com o primeiro e último elementos trocados.

```
const assert = require('assert');

const myList = [1, 2, 3, 4, 5];
const [,...myList2] = myList;

// escreva swap abaixo

const swappedList = swap(myList);
const swappedList2 = swap(myList2);

assert.strictEqual(swappedList[0], 5);
assert.strictEqual(swappedList[4], 1);
assert.strictEqual(swappedList2[0], 5);
assert.strictEqual(swappedList2[3], 2);
```

  6. Suponha que você esteja lidando com carros e, da forma como o problema lhe foi entregue, cada carro é modelado como um array. Porém, essa modelagem está baixo nível. Cria uma função `toObject` que, passe nos testes e dada uma lista, retorna um objeto representando o carro.

```
const assert = require('assert');

const palio = ["Palio", "Fiat", 2019];
const shelbyCobra = ["Shelby Cobra", "Ford", 1963];
const chiron = ["Chiron", "Bugatti", 2016];

// escreva toObject abaixo

assert.deepStrictEqual(toObject(palio), { name: "Palio", brand: "Fiat", year: 2019 });
assert.deepStrictEqual(toObject(shelbyCobra), { name: "Shelby Cobra", brand: "Ford", year: 1963 });
assert.deepStrictEqual(toObject(chiron), { name: "Chiron", brand: "Bugatti", year: 2016 });
```

  7. Escreva uma função `shipLength` que, passe nos testes e dado um objeto representando um navio, retorna o comprimento dele, mostrando também a devida unidade de comprimento:

```
const assert = require('assert');

const ships = [
    {
        name: "Titanic",
        length: 269.1
    },
    {
        name: "Queen Mary 2",
        length: 1132,
        measurementUnit: "feet"
    },
    {
        name: "Yamato",
        length: 256,
        measurementUnit: "meters"
    }
];

// escreva shipLength abaixo

assert.strictEqual(shipLength(ships[0]), "Titanic is 269.1 meters long");
assert.strictEqual(shipLength(ships[1]), "Queen Mary 2 is 1132 feet long");
assert.strictEqual(shipLength(ships[2]), "Yamato is 256 meters long");
```

  8. Escreva uma função `greet` que, passe nos testes e dado o nome de uma pessoa, retorna uma mensagem de cumprimento:

```
const assert = require('assert');

// escreva greet abaixo

assert.strictEqual(greet("John"), "Hi John");
assert.strictEqual(greet("John", "Good morning"), "Good morning John");
assert.strictEqual(greet("Isabela", "Oi"), "Oi Isabela");
```