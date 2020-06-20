const config = require('../../src/module.js');
const stylelint = require('stylelint');

describe('stylelint-config-holy-grail', () => {
    it('should lint a dummy text', () => {
        return stylelint.lint({ code: '', config }).then((data) => {
            expect(data.errored).to.be.false;

            expect(data.results[0].warnings.length).to.equal(0);
        });
    });
});
