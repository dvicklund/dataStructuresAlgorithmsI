var chai = require('chai');
var expect = chai.expect;
var Arrays = require('../arrays');

Array.prototype.pop = Arrays.pop;
Array.prototype.push = Arrays.push;
Array.prototype.shift = Arrays.shift;
Array.prototype.unshift = Arrays.unshift;
Array.prototype.unique = Arrays.unique;
Array.prototype.frequency = Arrays.frequency;

describe('array\'s pop function', function() {
  var testArray = [1, 2, 3, 4, 5];
  var resultArray = [1, 2, 3, 4];
  var lastElement;

  before(function() {
    lastElement = testArray.pop();
  });

  it('should return the last element', function() {
    expect(lastElement).to.equal(5);
  });

  it('should remove the last element', function() {
    expect(testArray).to.deep.equal(resultArray);
  });
});

describe('array\'s push function', function() {
  var testArray = [1, 2, 3, 4, 5];
  var resultArray = [1, 2, 3, 4, 5, 6];
  var returnResult;

  before(function() {
    returnResult = testArray.push(6);
  })

  it('should append an item to the end of an array', function() {
    expect(testArray[5]).to.exist;
  })

  it('should append the CORRECT item to the end', function() {
    expect(testArray).to.deep.equal(resultArray);
  })

  it('should return the length of the new array', function() {
    expect(returnResult).to.eql(6);
  })
});

describe('array\'s shift function', function() {
  var testArray = [1, 2, 3, 4, 5];
  var resultArray = [2, 3, 4, 5];
  var firstElement;

  before(function() {
    firstElement = testArray.shift();
  })

  it('should return first element', function() {
    expect(firstElement).to.equal(1);
  })

  it('should remove the first element', function() {
    expect(testArray).to.deep.equal(resultArray);
  })

});

describe('array\'s unshift function', function() {
  var testArray = [2, 3, 4, 5];
  var resultArray = [1, 2, 3, 4, 5];
  var returnResult;

  before(function() {
    returnResult = testArray.unshift(1);
  })

  it('should append an item to the front of an array', function() {
    expect(testArray).to.have.length(5);
  })

  it('should append the CORRECT item to the front', function() {
    expect(testArray).to.deep.equal(resultArray);
  })

  it('should return the new length of the array', function() {
    expect(returnResult).to.eql(5);
  })
});

describe('unique function', function() {
  var testArray = [1, 2, 2, 3, 3, 4, 4, 5];
  var resultArray = [1, 5];
  var realResult;

  before(function() {
    realResult = testArray.unique();
  })

  it('should remove all duplicates', function() {
    expect(resultArray).to.deep.equal(realResult);
  })
});

describe('frequency function', function() {
  var testArray = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
  var result = 'e';
  var realResult;

  before(function() {
    realResult = testArray.frequency();
  })

  it('should return the letter with the highest number of instances', function() {
    expect(result).to.deep.equal(realResult);
  })
});