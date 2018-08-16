const assert = require('assert');
const wtf = require('..');

describe('wtf', () => {
	it('returns hello world', () => {
		assert.equal(wtf.hello(), 'hello world!');
	});
});