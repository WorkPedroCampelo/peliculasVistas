
      function cargarDatos() {
         // Realizar una solicitud HTTP a la URL del archivo JSON
        fetch('peliculas.json')
          .then(response => response.json())
          .then(data => {
            // Acceder a la matriz de películas a través del objeto principal
            data.peliculas.forEach(pelicula => {
                const peliculaDiv = document.createElement('div');
                peliculaDiv.innerHTML = `<h4>${pelicula.nombre}</h4><p> Nota ${pelicula.nota}/10</p>`;
                document.querySelector('.container').appendChild(peliculaDiv);
            });
          });
      }
  
 