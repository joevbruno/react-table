import _ from 'lodash';

export function search(userInput, searchableData) {
  return searchableData.map( (item) => {
    for (const key of Object.keys(item)) {
      let val = item[key];
      if ( _.includes(val, userInput) ) {
        return item;
         break;
      }
    }
  }).filter( (item) => { if (item) return item; });
}

// Creates an object composed of keys generated from the results of running each element of
// collection through iteratee. The corresponding value of each key is an array of the elements responsible for generating the key.
export function group(data, prop) {
  return _.groupBy(data, prop);
}

// Creates an array of elements, sorted in ascending order by the results of running each element in a collection through iteratee. This method performs a stable sort, that is, it preserves the original sort order of equal elements.
export function sort(data, props, direction) {
  let results = null;
  if (direction) {
    results = _.sortByOrder(data, props, direction);
  } else {
    results = _.sortByAll(data, props);
  }
  return results;
}

export function filter(userInput) {
  const operators = {
    '<': (x, y) => x < y,
    '<=': (x, y) => x <= y,
    '>': (x, y) => x > y,
    '>=': (x, y) => x >= y,
    '==': (x, y) => x === y
  };
  const operandRegex = /^((?:(?:[<>]=?)|==))\s?([-]?\d+(?:\.\d+)?)$/;
  var test = operandRegex.exec(userInput);
}

export default {
  filter: filter,
  sort: sort,
  group: group,
  search: search
};
