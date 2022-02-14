const { createWindow } = require("./main");
const { app } = require("electron");
// const express = require('express');

// require("./server/database");

// const server = express();
// server.set('port', 3000);
// server.listen(server.get('port'), () => console.log(`Server on port http://localhost:3000}`));
// server.use('/', (req, res) => res.send({server: 'SERVER ON'}));

app.whenReady().then(createWindow);

try {
  require('electron-reloader')(module)
} catch (_) { }

app.allowRendererProcessReuse = false;
