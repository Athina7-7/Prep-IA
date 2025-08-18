import logo from './logo.svg';
import './App.css';

// useEffect: para ejecutar el código de un componente (Llamar el back, etc).
// useState: para guardar y actualizar valores
import { useEffect, useState } from 'react';

// Creación del componente principal de la App
function App() {
  // Se crea un estado llamado mensaje, con una valor vacío
  // con una funcion setMensaje que nos ayudará actualizarlo.
  // Mensaje es donde guardamos lo que mande el BACKEND.
  const [mensaje, setMensaje] = useState("");


  // Se usa para cargar el componente, el llamado del backend
  useEffect(() => {
    // Llamado del backend (corre en el puerto 5000)
    // ¿Que es fetch?
    // función JavaScript que permite realizar solicitudes HTTP de forma asíncrona, 
    // es decir, sin bloquear la ejecución del código principal. 
    // Proporciona una forma sencilla de obtener recursos de la red, 
    // como datos de una API, y maneja las respuestas como promesas. 
    // EN ESTE CASO: hace una petición HTTP GET a esa URL
    fetch("http://localhost:5000") //Se realiza la petición
      // Cuando llegue la respuesta, conviertela en text
      .then(res => res.text())
      // cuando se tenga el txt, mostrarlo en la consola
      .then(data => {
        setMensaje(data);       // Guarda el mensaje en el estado
        console.log(data);      // También lo muestra en consola
      });
  },[]);

  // Retorno de lo hayado en el back
  return (
    <div>
      {/* Si mensaje está vacío "", muestra Cargando
      Si ya tiene el valor del back lo muestra en pantalla */}
      <h1>{mensaje || "Cargando..."}</h1>
    </div>
  )
}

export default App;
