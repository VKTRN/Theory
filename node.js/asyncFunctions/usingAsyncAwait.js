// handling asynchrounous functions using async/await

const handleRejection = (value) => {
  console.log('The promise was rejected. The value is ' + value);
}

const handleResolve = (value) => {
  console.log('The promise was resolved. The value is ' + value);
}

const handleAsyncCode = async () => {
  
  const iWillHaveAResultInThreeSeconds = new Promise((resolve, reject) => {
    console.log('I will have a result in three seconds')
    
    setTimeout(() => {
      const value = Math.random();
  
      if (value > 0.5) {
        resolve(value);
      }
      reject(value);
  
    }, 3000);
  })

  try {
    const result = await iWillHaveAResultInThreeSeconds;
    handleResolve(result);
  }
  catch (result) {
    handleRejection(result);
  }
}

handleAsyncCode();
