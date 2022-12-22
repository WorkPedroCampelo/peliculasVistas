
//FUNCIONA PERFECTAMENTE, FALLAN LOS ESTILOS

function cargarDatos() {
  // Realizar una solicitud HTTP a la URL del archivo JSON
  fetch('peliculas.json')
    .then(response => response.json())
    .then(data => {
      // Acceder a la matriz de películas a través del objeto principal
      data.peliculas.forEach(pelicula => {
        const peliculaDiv = document.createElement('div');
        peliculaDiv.className='pelisDivFather';
        peliculaDiv.innerHTML =
                `<div class="pelisDiv">
                  <p class="tituloPeli"><b>${pelicula.nombre}</b></p>
                  <p>Nota ${pelicula.nota}/10</p>
                  <p>Año de lanzamiento: ${pelicula.añoLanzamiento} </p>
                  <p>Año de visualización: ${pelicula.añoVisualización} </p>
                </div>`;

        document.querySelector('.container').appendChild(peliculaDiv);
      });
    });
}

