// Тестируемая функция
function add(a: number, b: number) {
  return a + b;
}

// Тесты
describe("add function", () => {
  test("should add two numbers correctly", () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test("should handle edge cases", () => {
    expect(add(0, 0)).toBe(0);
    expect(add(1.1, 2.2)).toBeCloseTo(3.3);
  });
});
