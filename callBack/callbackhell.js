function getData(callback) {
    setTimeout(() => {
      callback(null, "data");
    }, 1000);
  }
  
  function processData(data, callback) {
    setTimeout(() => {
      callback(null, `processed ${data}`);
    }, 1000);
  }
  
  function saveData(data, callback) {
    setTimeout(() => {
      callback(null, `saved ${data}`);
    }, 1000);
  }
  
  // Callback Hell
  getData((err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    processData(data, (err, processedData) => {
      if (err) {
        console.error(err);
        return;
      }
      saveData(processedData, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        console.log(result);
      });
    });
  });
  