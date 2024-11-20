const powerCache = new WeakMap();

function* powerGenerator(baseValue) {
  const base = { value: baseValue };
  let exp = 0;

  while (true) {
    if (!powerCache.has(base)) powerCache.set(base, {});
    const cache = powerCache.get(base);
    if (cache[exp] !== undefined) {
      yield cache[exp];
    } else {
      const result = base.value ** exp;
      cache[exp] = result;
      yield result;
    }
    exp++;
  }
}

const gen = powerGenerator(2);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
