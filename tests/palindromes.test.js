const palindromes = require('../palindromes');

describe('palindromes()', () => {
    it('correctly identify one-word palindromes', () => {
        expect(palindromes('madam')).toEqual(['madam']);
    });


});