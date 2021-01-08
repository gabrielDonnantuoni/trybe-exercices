const funcs = require('./funcs');

describe('Test function isDivisible', () => {
  describe('when the randomNumber is even', () => {
    it('isDivisible should return "true" with the input 2', () => {
      funcs.randomNumber = jest.fn().mockReturnValue(9);
      console.log(funcs.randomNumber());
      expect.assertions(2);
      // const clSpy = jest.spyOn(console, 'log');
      expect(funcs.isDivisible(2)).toBe(true);
      expect(funcs.randomNumber).toHaveBeenCalledTimes(1);
    });
  });
});
