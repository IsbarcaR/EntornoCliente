const pares = {
    [Symbol.iterator]() {
      let num = 0;
      return {
        next() {
          num += 2;
          return { value: num, done: false };
        }
      };
    }
  };
  
  for (let num of pares) {
    console.log(num);
    if (num >= 20) break;
  }
  