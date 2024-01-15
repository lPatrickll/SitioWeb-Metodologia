const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 4000;
const ejs = require('ejs');
app.set('view engine', 'ejs');


// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'SitioWeb'
});

// Conectar a la base de datos
db.connect((err) => {
  if (err) {
    console.error('Error de conexión a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});

// Configurar middleware para analizar el cuerpo de la solicitud (body-parser)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors()); // Agregar esta línea para permitir solicitudes desde cualquier origen

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Consulta SQL para verificar las credenciales del usuario
  const sql = 'SELECT * FROM usuarios WHERE nombre = ? AND contrasena = ?';
  
  db.query(sql, [username, password], (err, result) => {
    if (err) {
      console.error('Error de consulta:', err);
      res.status(500).send('Error interno del servidor');
    } else {
      if (result.length > 0) {
        // Credenciales válidas, responder con un código de éxito
        res.status(200).send('Inicio de sesión exitoso');
      } else {
        // Credenciales inválidas, responder con un código de error
        res.status(401).send('Credenciales incorrectas');
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});