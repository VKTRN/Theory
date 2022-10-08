// handling asynchrounous functions using promises
// firstFunction() and secondFunction() represent asynchronous functions that for example fetch data from a database

const firstFunction = (resolve) => {
  console.log('run first function');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return promise;
}

const secondFunction = (resolve) => {
  console.log('run second function');
  
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return promise;
}

const handleError = () => {
  console.log('error');
}

const sayDone = () => {
  console.log('Done');
}

const logResult = (first, second) => {
  console.log(first, second);
}

firstFunction()
  .then(secondFunction)
  .then(sayDone)
  .catch(handleError)