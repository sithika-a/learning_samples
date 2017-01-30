const { createProxyForRemote} = require('electron-remote');
const {BrowserWindow} = require('electron').remote;
console.log(`win title : ${BrowserWindow.fromId(1).getTitle()}`)
  const myWindowJs = createProxyForRemote(BrowserWindow.fromId(1));
  async function test(){
		await myWindowJs.addNumbers(3,4).then(result => console.log(`The addition result is ${result}`));  
	}
	test();
