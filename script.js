function cargarDatos() {
    //Esto leerá el JSON
    fetch('peliculas.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            //creamos el bucle para recorrer cada pelicula del array
            for (var i = 0; index < json.length; i++) {


                //Aqui extraemos los datos del JSON
                var id = json.id;
                var nombre = json.nombre;
                var nota = json.nota;
                var añoVisualización = json.añoVisualización;
                var añoLanzamiento = json.añoLanzamiento;

                //Y aqui los insertamos en el HTML (falta ponerle los id a las etiquetas de html)

                /*ESTE METODO ESTÁ MAL PORQUE SOLO TIENE EN CUENTA QUE SOLO LOS VAMOS A PONER UNA VEZ
                document.getElementById('idPelicula').innerHTML = id;
                document.getElementById('nombre').innerHTML = nombre;
                document.getElementById('nota').innerHTML = nota;
                document.getElementById('añoVisualización').innerHTML = añoVisualización;
                document.getElementById('añoLanzamiento').innerHTML = añoLanzamiento;
                */


                // ChatGPT lo recomienda así, falta adaptarlo  
                var div = document.createElement('div');
                div.innerHTML = 
                    '<p>Nombre: ' + nombre + '</p>' +
                    '<p>Edad: ' + edad + '</p>' +
                    '<p>Ciudad: ' + ciudad + '</p>';
                document.body.appendChild(div);
            }

        })
}