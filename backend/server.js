// ¿Qué se supone que hace este archivo?
// Es donde se encuentra la conexión de MongoDB,
// escucha las peticiones en el puerto indicado (en este caso 5000)
// y es donde se escucha las rutas necesarias

// NOTA: Este archivo es el backend en Express, ya que contiene
// rutas, permite que otras apps (como react) le hagan peticiones
// y estas devuelven en formato JSON
// ----------------------------------------------------------------

// Importación de las librerías
// express: es para manejar las rutas y peticiones
// mmongooose: para conectar y trabajar con MongoDB
// cors: es para conectar el front y back apesar de las ruta


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Creación del servidor
const app = express();

// Vincula mi front y back que acceda al servidor creado
app.use(cors());

// Le indica que el servidor podrá entender peticiones en formato JSON 
app.use(express.json());

// Aquí se realiza la conexión de la BD creada con el proyecto
// En este caso no tenemos ninguna BD creada, asi que no se
// vincula ninguna, pero si fuera el caso se agrega la URL
// en "mongodb://localhost:27017/miDB"
mongoose.connect("mongodb://localhost:27017/miDB")
// then es si sale todo bien en la conexión
    .then(() => console.log("MongoDB conectado"))
// catch es si no sale bien la conexión
    .catch(err => console.error(err));


app.get("/",(req, res) => {
    // envia una respuesta de tipo txt plano, pero si quisiera enviar
    // un res.json({mensaje:"hola"}), aqui si responde mi server en JSON.
    res.send("Hola mundo desde la API de express");
})

// Le indico a mi servidor app que escuche en el puerto 5000
app.listen(5000, () =>{
    console.log("Nuestra API está en el servidor: http://localhost:5000");
});

