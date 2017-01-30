const {BrowserWindow,app} = require('electron');
const { createProxyForRemote } = require('electron-remote');
app.on('ready',function(){
	let win = new BrowserWindow({width :800, height :600});
	win.loadURL(`file://${__dirname}/win.html`);
	let childWin = new BrowserWindow({width :800, height :600});
	win.loadURL(`file://${__dirname}/child.html`);

});
