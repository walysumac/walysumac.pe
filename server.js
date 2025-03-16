const express = require('express');
const path = require('path');
const app = express();

// Actualizar la ruta para apuntar a la subcarpeta 'browser'
const distPath = path.join(__dirname, 'dist', 'walysumac.pe', 'browser');
app.use(express.static(distPath));

app.get('/*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(process.env.PORT || 8080, '0.0.0.0');

