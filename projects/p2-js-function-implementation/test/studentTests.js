var assert = require('assert');


/* FUNCTIONS */
var functions = require('../index');
var avgLenOfVals = functions.avgLenOfVals;


describe('avgLenOfVals', function() {
  it('testing basic case 1', function() {
      var dict = {
          'hello': 'world',
          'ishaan': 'parikh',
          'sashi': 'thupu',
          2:'hi',
          3: 51
      };
      assert.equal(4.0, avgLenOfVals(dict));
  });
  it('testing basic case 2', function() {
      var dict = {};
      
      assert.equal(0, avgLenOfVals(dict));
  });
});