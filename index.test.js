// Write a function that returns the number of items that are
// equal to 'true' in 'array'
//
// ex. countTrue([true, false]) -> 1
function countTrue(array) {
  // YOUR CODE HERE
}

test("countTrue()", () => {
  expect(countTrue([])).toEqual(0);
  expect(countTrue([false, false, false, false])).toEqual(0);
  expect(countTrue([true, false, false, false])).toEqual(1);
  expect(countTrue([true, false, false, true])).toEqual(2);
  expect(countTrue([true, false, false, true, true, true, true])).toEqual(5);
  expect(countTrue([1])).toEqual(0);
  expect(countTrue(["true"])).toEqual(0);
});

// Write a function that return the number of times 'item' appears
// in 'array'
//
// ex. countItem('apple', ['orange', 'apple', 'apple', 'apple']) -> 3
// ex. countItem('orange', ['orange', 'apple', 'apple', 'apple']) -> 1
function countItem(item, array) {
  // YOUR CODE HERE
}

test("countItem()", () => {
  expect(countItem(1, [])).toEqual(0);
  expect(countItem(false, [])).toEqual(0);
  expect(countItem(12, [1, 2, 3, 4, 5, 6, 12])).toEqual(1);
  expect(countItem(12, [1, 2, 3, 4, 12, 5, 6, 12, 12, 12])).toEqual(4);
  expect(countItem(false, [1, 2, 3, false, true, false, 1, 0])).toEqual(2);
});
