var Arrays = module.exports = exports = {
  push: function(x) {
    this[this.length] = x;
    return this.length;
  },

  pop: function() {
    var tmp = this[this.length - 1];
    delete this[this.length-1];
    return tmp;
  },

  shift: function() {
    var tmp = this[0];
    var length = this.length;
    for(var i = 0; i < length; i++) {
      this[i] = this[i + 1] || null;
    }
    delete this[this.length - 1];
    return tmp;
  },

  unshift: function(x) {
    var length = this.length;
    for(var i = length - 1; i >= 0; i--) {
      this[i + 1] = this[i];
    }
    this[0] = x;
    return this.length;
  },

// It takes an array and returns a copy of the array with all the duplicates removed.
  unique: function() {
    var uniqueArray = [];
    this.forEach(function(curr, i, array) {
      if(array.lastIndexOf(curr) === i && array.indexOf(curr) === i) {
        uniqueArray.push(curr);
      }
    });
    return uniqueArray;
  },

// Given an array of english words, figure out what the most common letter (anywhere in a word) is.
  frequency: function() {
    var result;
    var letterMap = {};

    this.forEach(function(curr, i, array) {
      for(i = 0; i < curr.length; i++) {
        if(letterMap.hasOwnProperty(curr[i])) {
          letterMap[curr[i]] += 1;
        } else {
          Object.defineProperty(letterMap, curr[i], {
            enumerable: true,
            configurable: false,
            writable: true,
            value: 1
          });
        }
      }
    });

    var highestFreq = 0;
    Object.keys(letterMap).forEach(function(curr) {
      if(letterMap[curr] > highestFreq) {
        highestFreq = letterMap[curr];
        result = curr;
      }
    });

    return result;
  }
};

// var test1 = [1, 2, 3, 4, 5];
// test1.push(6);
// console.log(test1.toString());

// Array.prototype.push = Arrays.push;
// Array.prototype.pop = Arrays.pop;
// var test2 = new Array();
// test2.push(1);
// test2.push(2);
// test2.push(3);

// console.log(test2.toString());