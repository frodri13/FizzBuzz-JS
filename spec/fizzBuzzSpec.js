describe("FizzBuzz", function () {
  // we declare a local variable with the var keyword
  var fizzBuzz;

  beforeEach(function () {
    // create an instance of FizzBuzz and assign it to our variable fizzBuzz. We need to add (); at the end of our class FizzBuzz();
    fizzBuzz = new FizzBuzz();
  });

  describe("Knows when a number is", function () {
    // we can use it like in rspec
    it("divisible by 3", function () {
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });

    it("divisible by 5", function () {
      expect(fizzBuzz.isDivisibleByFive(5)).toBe(true);
    });
  });

  describe("Knows when a number is NOT", function () {
    it("divisible by 3", function () {
      expect(fizzBuzz.isDivisibleByThree(5)).toBe(false);
    });

    it("divisible by 5", function () {
      expect(fizzBuzz.isDivisibleByFive(3)).toBe(false);
    });
  });
});
