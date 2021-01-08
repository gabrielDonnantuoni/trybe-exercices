const { uppercase, users, findUserById, getUserName, getRepos, findAnimalByName, getAnimal } = require('./funcs');

describe('Test function uppercase', () => {
  it('Should return "GABRIEL" by entering "gabriel"', (done) => {
    uppercase('gabriel', (str) => {
      expect(str).toBe('GABRIEL');
      done();
    });
  });
});

describe('Test function getUserName', () => {
  describe('With promises syntax', () => {
    it('should find user with an id = 4 and return the users name', () => {
      return expect(getUserName(4)).resolves.toBe('Mark');
    });
  
    it('should not find user with an id = 6 and return an error', () => {
      return expect(getUserName(6)).rejects.toHaveProperty('error');
    });
  });

  describe('With async/await syntax', () => {
    it('should find user with an id = 4 and return the users name', async () => {
      const userName = await getUserName(4);
      expect(userName).toBe('Mark');
    });
  
    it('should not find user with an id = 6 and return an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(6);
      } catch (e) {
        expect(e).toEqual({ error: 'User with 6 not found.' });
      }
    });
  });
});

describe('Test function getRepos', () => {
  describe('when the return contain the repo', () => {
    it('should have "enterprise-bridge-panel"', () => {
      return expect(getRepos('https://api.github.com/users/tryber/repos'))
        .resolves.toContain('enterprise-bridge-panel');
    });

    it('should have "exercise-dog-image"', () => {
      return expect(getRepos('https://api.github.com/users/tryber/repos'))
        .resolves.toContain('exercise-dog-image');
    });
  });
});

describe('Test to verify beforeEach/afterEach knowledge', () => {
  beforeEach(() => console.log('1 - beforeEach'));
  afterEach(() => console.log('1 - afterEach'));

  test('', () => console.log('1 - test'));

  describe('Scoped / Nested block', () => {
    beforeEach(() => console.log('2 - beforeEach'));
    afterEach(() => console.log('2 - afterEach'));

    test('', () => console.log('2 - test'));
  });
});

describe('Testando promise - findAnimalByName', () => {
  describe('Quando existe o animal com o nome procurado', () => {
    test('Retorne o objeto do animal', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('Quando não existe o animal com o nome procurado', () => {
    test('Retorna um erro', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('Nenhum animal com esse nome!')
      );
    });
  });
});
