// Write a function that returns the number of true in an array
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
