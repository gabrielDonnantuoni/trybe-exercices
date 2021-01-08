const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};
  
const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

// const verifyFetch = async () => {
//   const fetche = await getRepos('https://api.github.com/users/tryber/repos');
//   console.log(fetche);
// }
// verifyFetch();

const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (animalName) => {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
      const animal = Animals.find(({ name }) => name === animalName);
      if (animal) return resolve(animal);
      return reject('Nenhum animal com esse nome!');
    },100);
  });
}

const getAnimal = (animalName) => {
  const animal = findAnimalByName(animalName);
  return animal;
}
// const getAnimal = (animalName) => {
//   return findAnimalByName(animalName).then((a) => a);
// }
// console.log(getAnimal('Dorminhoco'));

module.exports = { uppercase, users, findUserById, getUserName, getRepos, findAnimalByName, getAnimal };