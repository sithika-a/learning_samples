const { initializeEvalHandler} = require('electron-remote');

  initializeEvalHandler();
  window.addNumbers = (a,b) => {
  	console.log('Adding two numbers..')
  	return a+b;
  }