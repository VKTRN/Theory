// handling asynchrounous functions using async/await

const firstFunction = () => {
  console.log('run first function')

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 1000);
  });

  return promise;
}

const secondFunction = () => {
  console.log('run second function')

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

const handleAsync = async () => {
  try {
    await firstFunction()
    await secondFunction()
    sayDone()

  } catch (error) {
    handleError()
  }
}

handleAsync()

