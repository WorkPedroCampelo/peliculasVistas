/*function cargarDatoss() {
    // Realizar una solicitud HTTP a la URL del archivo JSON
    fetch('peliculas.json')
      .then(response => response.json()) // Procesar la respuesta como JSON
      .then(data => {
        // Aquí tienes acceso a los datos del archivo JSON
        // Puedes iterar sobre ellos y agregarlos al DOM como desees
        data.forEach(pelicula => {
          const peliculaDiv = document.createElement('div');
          peliculaDiv.innerHTML = `<h4>${pelicula.titulo}</h4><p>${pelicula.descripcion}</p>`;
          document.querySelector('.container').appendChild(peliculaDiv);
        });
      });
*/
      function cargarDatos() {
         // Realizar una solicitud HTTP a la URL del archivo JSON
        fetch('peliculas.json')
          .then(response => response.json())
          .then(data => {
            // Acceder a la matriz de películas a través del objeto principal
            data.peliculas.forEach(pelicula => {
                const peliculaDiv = document.createElement('div');
                peliculaDiv.innerHTML = `<h4>${pelicula.titulo}</h4><p>${pelicula.descripcion}</p>`;
                document.querySelector('.container').appendChild(peliculaDiv);
            });
          });
      }
  
  /*function cargarDatos() {
    alert("hola")
    //Esto leerá el JSON
    fetch('peliculas.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //creamos el bucle para recorrer cada pelicula del array
            for (var i = 0; i < json.length; i++) {


                //Aqui extraemos los datos del JSON
                var id = json[i].id;
                var nombre = json[i].nombre;
                var nota = json[i].nota;
                var añoVisualización = json[i].añoVisualización;
                var añoLanzamiento = json[i].añoLanzamiento;

                //Y aqui los insertamos en el HTML (falta ponerle los id a las etiquetas de html)

                //ESTE METODO ESTÁ MAL PORQUE SOLO TIENE EN CUENTA QUE SOLO LOS VAMOS A PONER UNA VEZ
                //document.getElementById('idPelicula').innerHTML = id;
                /*document.getElementById('nombre').innerHTML = nombre;
                document.getElementById('nota').innerHTML = nota;
                document.getElementById('añoVisualización').innerHTML = añoVisualización;
                document.getElementById('añoLanzamiento').innerHTML = añoLanzamiento;
                


                // ChatGPT lo recomienda así, falta adaptarlo  
                var div = document.createElement('div');
                div.innerHTML = 
                '<p class="nombre">Nombre: ' + nombre + '</p>' +
                '<p class="nota">Nota: ' + nota + '</p>' +
                '<p class="añoLanzamiento">Año de Lanzamiento: ' + añoLanzamiento + '</p>';
                document.body.appendChild(div);
            }

        })
}
*/