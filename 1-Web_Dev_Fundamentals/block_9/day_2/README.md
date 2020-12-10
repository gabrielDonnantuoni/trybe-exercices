## JavaScript Promises

### Exercícios

  1. Como o primeiro exercício, vamos usar a função fetch , que vimos na aula ao vivo, para criar um site simples com um gerador de piadas ruins!
    * Primeiro, veja o [manual da API do site icanhazdadjoke.com](https://icanhazdadjoke.com/api) . Ele esclarece como fazer as requisições ao serviço de piadas.
    * Utilize o HTML e o js a seguir como base:

```
<!DOCTYPE html>
<html>
  <head>
    <title>Best jokes ever</title>
  <script src="apiScript.js" ></script>
  </head>
  <body>
    <h1>Get ready for a great joke!</h1>
    <h2 id="jokeContainer"></h2>
  </body>
</html>
```

```
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
};

window.onload = () => fetchJoke();
```

  2. Vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise . Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado. Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

  3. Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

  4. Quando a Promise for rejeitada, imprima, via console.log , a frase "É mais de oito mil! Essa promise deve estar quebrada!"

  5. Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

  #### Bônus
    * Utilize somente Higher Order Functions para fazer as operações com o array;
    * Refatore a Promise para utilizar somente `async` e `await`.
