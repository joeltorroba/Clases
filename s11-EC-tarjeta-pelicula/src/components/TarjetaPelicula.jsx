
function TarjetaPelicula({ titulo, director }) {

    const handleMarcarVista=()=>{
        console.log('¡Click en el botón!')
        console.log('Marcando como vista:', titulo, '-', director)
        alert(`Has marcado como vista: ${titulo}`)     
        
    }
 return (
    <article className="tarjeta-pelicula">
      <h3>{titulo}</h3>
      <p>{director}</p>
      <div className="fila">
        <button onClick={handleMarcarVista}>Marcar como vista</button>
      <button
        onPointerDown={() => console.log('Pulsación iniciada')}
        onPointerUp={() => console.log('Pulsación terminada')}
        onPointerEnter={() => console.log('Entró el puntero')}
        onPointerLeave={() => console.log('Salió el puntero')}
    >
      Más información
    </button> 
      </div>
    </article>
  )
}
export default TarjetaPelicula 