function map(array, fn) {
  let ret = [];
  for (let item of array) {
    ret.push(fn(item));
  }
  return ret;
}

test("map function applies given function to each element in array", () => {
  const array = [1, 2, 3];
  const double = (num) => num * 2;
  const result = map(array, double);
  expect(result).toEqual([2, 4, 6]);
});
