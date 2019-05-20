const { countSteps } = require("./test6");

test("countSteps", () => {
  expect(countSteps(1)).toBe(1);
  expect(countSteps(2)).toBe(2);
  expect(countSteps(4)).toBe(5);
  expect(countSteps(10)).toBe(89);
  expect(countSteps(14)).toBe(610);
});
