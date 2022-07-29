const modulo = () => {
  for (let i = 0; i < 20; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else {
      console.log("", i);
    }
  }
};
modulo();
