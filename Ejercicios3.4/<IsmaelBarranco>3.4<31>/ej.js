const cache = new WeakMap();

function fetchData(obj) {
  if (cache.has(obj)) return cache.get(obj);
  const data = { result: Math.random() };
  cache.set(obj, data);
  return data;
}

let obj1 = {};
console.log(fetchData(obj1));
console.log(fetchData(obj1));
obj1 = null;
