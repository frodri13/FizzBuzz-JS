class FizzBuzz {
  isDivisibleByThree(number) {
    return number % 3 === 0;
  }
  isDivisibleByFive(number) {
    return number % 5 === 0;
  }

  isDivisibleByFifteen(number) {
    return number % 3 === 0 && number % 5 === 0;
  }
  says(number) {
    if (this.isDivisibleByFifteen(number)) {
      return "FizzBuzz";
    } else if (this.isDivisibleByThree(number)) {
      return "Fizz";
    } else if (this.isDivisibleByFive(number)) {
      return "Buzz";
    } else {
      return number;
    }
  }
}

let fizzbuzz = new FizzBuzz();

for (let i = 1; i < 101; i++) {
  console.log(fizzbuzz.says(i));
}
