var http = require('http');
fs=require('fs');

http.createServer(function(solicitud, respuesta){

    if (solicitud.url === '/') {
        fs.readFile('./inicio.html',function(error,html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if (solicitud.url === '/inicio') {
        fs.readFile('./inicio.html',function(error,html){
            respuesta.write(html);
            respuesta.end();
        });
    }
    if (solicitud.url === '/nosotros') {
        fs.readFile('./nosotros.html',function(error,html){
            respuesta.write(html);
            respuesta.end();
        });
    }
    if (solicitud.url === '/servicios') {
        fs.readFile('./servicios.html',function(error,html){
            respuesta.write(html);
            respuesta.end();
        });
    }
    if (solicitud.url === '/catalogo') {
        fs.readFile('./catalogo.html',function(error,html){
            respuesta.write(html);
            respuesta.end();
        });
    }

    if (solicitud.url === '/contactenos') {
        if(solicitud.method == 'GET'){
            console.log("nose get");
        respuesta.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('./contactenos.html', 'UTF-8').pipe(respuesta);
        } 
    }
    
	if (solicitud.url === '/confirmacion') {
         if (solicitud.method == 'POST'){
            
            let body = '';
            
            solicitud.on('data', chunk => {body+= chunk;});
    
            
    
                solicitud.on('end', () => {
                respuesta.writeHead(200, {'Content-Type': 'text/html'});
    
    
                let x1 = body.split('&');
    
    
                console.log("x1 => ",x1);
                console.log("x1 size => ",x1.length);
    
    
                for (var i = 0; i < x1.length; i++) {
                    console.log(x1[i]);
                    nombre = x1[0]
                    email = x1[1]
                    telefono = x1[2]
                    nacimiento = x1[3]
                    mensaje = x1[4]
                }
                
                console.log("nombre => ", nombre);
                console.log("email => ", email);
                console.log("telefono => ", telefono);
                console.log("nacimiento => ", nacimiento);
                console.log("mensaje => ", mensaje);
    
                var nombre2 = String(nombre).split('nombre=');
                var email2 = String(email).split('email=');
                var telefono2 = String(telefono).split('telefono=');
                var nacimiento2 = String(nacimiento).split('nacimiento=');
                var mensaje2 = String(mensaje).split('mensaje=');
    
                console.log("Nombre 2 => ",nombre2)
    
                respuesta.end(`
                <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>ACME | Confirmacion</title>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-aFq/bzH65dt+w6FI2ooMVUpc+21e0SRygnTpmBvdBgSdnuTN7QbdgL+OapgHtvPp" crossorigin="anonymous">
            <link rel="preconnect" href="https://fonts.googleapis.com">
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200&display=swap" rel="stylesheet">
        </head>
        <body style="font-family: 'Poppins', sans-serif;">
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha2/dist/js/bootstrap.bundle.min.js" integrity="sha384-qKXV1j0HvMUeCBQ+QVp7JcfGl760yU08IQ+GpUo5hlbpg51QRiuqHAJz8+BrxE/N" crossorigin="anonymous"></script>
          <nav class="navbar navbar-expand-lg px-5" style="background-color: #581845">
          <div class="container">
              <a class="navbar-brand" href="#page-top"><strong style="color: aliceblue">ACME</strong></a>
              <button style="background-color: #862468" class="navbar-toggler text-uppercase font-weight-bold  text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i class="fas fa-bars"></i>
              </button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto">
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/inicio">Inicio</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/nosotros">Nosotros</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/servicios">Servicios</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/catalogo">Catalogo</a></li>
                      <li class="nav-item mx-0 mx-lg-1"><a class="nav-link py-3 px-0 px-lg-3 rounded" style="color: aliceblue" href="/contactenos">Contactenos</a></li>
                  </ul>
              </div>
          </div>
      </nav>
            <div class="section m-5">
    
            <h1>Confirmacion</h1>
        <p>El nombre es: ${nombre2[1]}</p>
        <p>Su email es: ${email2[1]}</p>
        <p>Su telefono es: ${telefono2[1]}</p>
        <p>Su fecha de nacimiento es: ${nacimiento2[1]}</p>
        <p>Su mensaje es: ${mensaje2[1]}</p>
        </body>
    </html>
                `);
            });
        }
    }

}).listen(9080);