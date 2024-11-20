function* fibonacci() {
    let a = 0, b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
  }
  
  const fibo = fibonacci();
  console.log([...Array(10)].map(() => fibo.next().value));
  