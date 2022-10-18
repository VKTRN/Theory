const squaringIteratorProvider = (n) => {
  const squaringIterator = () => {
    let i = 0;
    return {
      next: () => {
        if (i > n) {return { done: true }}
        const result = { value: i * i, done: false };
        i++;
        return result;
      }
    };
  }  
  return squaringIterator;
}

const iterator = squaringIteratorProvider(10);

console.log(iterator().next());


// const square = {
//   [Symbol.iterator]: iterator
// }

// for (const s of square) {
//   console.log(s);
// }
