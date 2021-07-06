describe("FizzBuzz", function () {
  // we declare a local variable with the var keyword
  var fizzBuzz;

  describe("Knows when a number is", function () {
    // we can use it like in rspec
    it("divisible by 3", function () {
      // create an instance of FizzBuzz and assign it to our variable fizzBuzz. We need to add (); at the end of our class FizzBuzz();
      fizzBuzz = new FizzBuzz();
      expect(fizzBuzz.isDivisibleByThree(3)).toBe(true);
    });
  });
});
