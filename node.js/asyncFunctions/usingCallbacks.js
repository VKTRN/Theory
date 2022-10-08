// handling asynchrounous functions using callbacks
// firstFunction() and secondFunction() represent asynchronous functions that for example fetch data from a database

const firstFunction = (callBack) => {
  console.log('run first function');
    setTimeout(() => {
        callBack();
    }, 1000);
}

const secondFunction = (callBack) => {
  console.log('run second function');
    setTimeout(() => {
        callBack();
    }, 1000);
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

firstFunction(() => {
  secondFunction(() => {
      sayDone();
  }, handleError);
}, handleError);