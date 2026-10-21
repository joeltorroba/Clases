import TarjetaPelicula from './components/TarjetaPelicula.jsx'
import ValorarPelicula from './components/ValorarPelicula.jsx'
import FormularioComentario from './components/FormularioComentario.jsx'
import BuscadorPeliculas from './components/BuscadorPeliculas.jsx'
import ListaPeliculas from './components/ListaPeliculas.jsx'
import CampoBusqueda from './components/CampoBusqueda.jsx'
import FormularioResena from './components/FormularioResena.jsx'
import './App.css'

const handleClick = (event) => {
  event.preventDefault()    // Prevenir comportamiento por defecto
  event.stopPropagation()   // Detener propagación del evento
  event.target               // Elemento que disparó el evento
  event.currentTarget        // Elemento al que está adjunto el evento
  event.type                  // Tipo de evento ('click', 'change', etc.)
}
function App() {
 

  return (
    <main>
     <h1>Cartelera</h1>
     <TarjetaPelicula titulo=" Estación de niebla" director="Marta Roig"/>
      <ValorarPelicula titulo="Estación de niebla" />
       <FormularioComentario />
      <BuscadorPeliculas />
      <ListaPeliculas />
      <FormularioResena />
    </main>
  )
}

export default App
