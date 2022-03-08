import './App.css';
import Logo from './logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from 'react-bootstrap';
import Frase from './components/Frase';
import {useState, useEffect} from 'react';
import Spinner from './components/Spinner'


function App() {
  const [personaje, setPersonaje] = useState({}); // se inicializa con {} por un objeto vacío
  const [carga, setCarga] = useState(true);

  useEffect(()=>{
    consultaAPI();

  },[]); // los [] para que funcionen en fase de montaje y no en actualización
  // sin los [] entra en un bucle actualiza en montaje y atualización

  const consultaAPI = async()=>{
    setCarga(true);
    const respuesta = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes'); // es una promesa
    const dato = await respuesta.json();
    setTimeout(()=>{
      setPersonaje(dato[0]);  // guardar el dato en el objeto state
      setCarga(false);
    }, 2000)
  }

  // operador ternario
  // (condición lógica) ? (codigo si es True) : (codigo si es False)
  const mostrarComponente = (carga === true) ? (<Spinner> </Spinner>) : (<Frase personaje={personaje}> </Frase>)

  return (
    <section className='container my-5 d-flex flex-column align-items-center'>
      <img src={Logo} alt="logo de los simpsons"/> 
      <Button variant='warning' className='w-50 my-5' onClick={()=>consultaAPI()}>Obtener frase</Button>
      {mostrarComponente}
    </section>
  );
}

export default App;
