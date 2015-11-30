exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    var index;
    for(var i = 0; i < arr.length; i++) {
      if(arr[i] === item) {
        index = i;
      }
    }
    if(index) {
      return index;
    }
    return -1;
  },

  sum : function(arr) {
    var sum = 0;
    for(var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    var copy = arr.slice();
    for(var i = 0; i < copy.length; i++) {
      if(copy[i] === item) {
        copy.splice(i,1);
      }
    }
    return copy;
  },

  removeWithoutCopy : function(arr, item) {
    var length = arr.length;
    for(var i = 0; i < length; i++) {
      if(arr[i] === item) {
        arr.splice(i,1);
        i -= 1;
        length -= 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr[arr.length] = item;
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var len = arr1.length;
    for(var i = 0; i < arr2.length; i++) {
      arr1[len + i] = arr2[i];
      len -= i;
    }

    return arr1;
  },

  insert : function(arr, item, index) {

  },

  count : function(arr, item) {

  },

  duplicates : function(arr) {

  },

  square : function(arr) {

  },

  findAllOccurrences : function(arr, target) {

  }
};
