$(document).ready(() => {

// -----------Nav bar-----------

  $('#btn-nav').on('click',() => {
    $('nav').slideToggle(1000);
    $('.menu-item').on('mouseup',() => {
      $('nav').slideUp(1000);
    });
  });

  $('#app1-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app1').delay(1000).slideDown( 300 );
  });

  $('#app2-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app2').delay(1000).slideDown( 300 );
  });

  $('#app3-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app3').delay(1000).slideDown( 300 );
  });

  $('#app4-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app4').delay(1000).slideDown( 300 );
  });

  $('#app5-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app5').delay(1000).slideDown( 300 );
  });

  $('#app6-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app6').delay(1000).slideDown( 300 );
  });

  $('#app7-tigger').on('mouseup',() => {
    $('section').slideUp(400);
    $('#app7').delay(1000).slideDown( 300 );
  });

});


//---------------App 1---------------

var contador = 1;

document.getElementById('btn-contar').addEventListener('click', () => {
  contador++;
  if (contador == 13) {
    contador = 1;
    document.getElementById('out-contador').innerHTML = 'Feliz año';
  }else {
    document.getElementById('out-contador').innerHTML = contador;
  }
});




//---------------App 2---------------
var inputsNotas = document.getElementById('inputsNotas');
var inputsRangos = document.getElementById('inputsRangos');

var rangoMayor, rangoMenor, nota, contador = 0, sumaNotas= 0, promedio = 0;

document.getElementById('btn-calcular').addEventListener('click', () => {

  // ------------Validacion Rangos------------

  if (inputsNotas.style.display != 'block') {

    rangoMenor = document.getElementById('input-rangoMenor').value;
    rangoMayor = document.getElementById('input-rangoMayor').value;
    if (rangoMenor < 0 || rangoMenor == '') {
      alert('Su rango no puede ser menor a cero O dejo el espacio vacio');

    }else if (rangoMayor <= rangoMenor || rangoMayor == '') {
      alert('Tome encuenta el rango Menor O dejo el espacio vacio');

    }else {
      inputsRangos.style.display = 'none';
      inputsNotas.style.display = 'block';
    }
    return ;
  }

  // ------------Validacion notas------------

  if (inputsRangos.style.display != 'block') {

    nota = document.getElementById('input-nota').value;

    if (nota == '' || parseFloat(nota) > rangoMayor || parseFloat(nota) < rangoMenor) {
      alert('Recuerde los parametros anteriores O el campo esta vacio');
    }else {
      contador++;
      sumaNotas += parseFloat(nota);
      promedio = sumaNotas/contador;

      var ultimaNota = document.createElement('li');
      var ultimaNotaContenido = document.createTextNode('Nota' + contador + ':  ' + nota + ' PTS' )
      ultimaNota.appendChild(ultimaNotaContenido);
      document.getElementById('listNotas1').appendChild(ultimaNota);
      document.getElementById('promedio').innerHTML = promedio;
    }
  }
});




//--------------- App 3---------------
var inputsNotas2 = document.getElementById('inputsNotas-2');
var inputsRangos2 = document.getElementById('inputsRangos-2');

var rangoMayor2, rangoMenor2, nota2, contador2 =0,
sumaNotas2= 0, sumaPonderaciones = 0, ponderacion;

document.getElementById('btn-calcular-2').addEventListener('click', () => {

  // ------------Validacion Rangos------------

  if (inputsNotas2.style.display != 'block') {
    rangoMenor2 = document.getElementById('input-rangoMenor-2').value;
    rangoMayor2 =  document.getElementById('input-rangoMayor-2').value;

    if (rangoMenor2 < 0 || rangoMenor2 == '') {
      alert('Su rango no puede ser menor a cero O dejo el espacio vacio');

    }else if (rangoMayor2 <= rangoMenor2 || rangoMayor2 == '') {
      alert('Tome encuenta el rango Menor O dejo el espacio vacio');

    }else {
      inputsRangos2.style.display = 'none';
      inputsNotas2.style.display = 'block';
    }
    return;
  }


  // ------------Validacion notas------------

  if (inputsRangos2.style.display != 'block') {

    nota2 = document.getElementById('input-nota-2').value;
    ponderacion = parseInt(document.getElementById('input-ponderacion').value);

    if (parseFloat(nota2) > rangoMayor2 || parseFloat(nota2) < rangoMenor2 || nota2 == '') {
      alert('Recuerde los parametros anteriores O el campo esta vacio');
    }else if ((ponderacion + sumaPonderaciones) > 100 || ponderacion < 1 || ponderacion > 99 || ponderacion == '') {
      alert('Porfavor ingrese una ponderacion entre 1 y 99 % O el campo esta vacio');
    }else {

      contador2++;
      sumaNotas2 +=  (nota2 * ponderacion);
      sumaPonderaciones += ponderacion;

      var mediaPonderada = sumaNotas2 / sumaPonderaciones;
      console.log(mediaPonderada);

      var ultimaNota2 = document.createElement('li');
      var ultimaNotaContenido2 = document.createTextNode('Nota' + contador2 + ':  ' + nota2 + 'PTS' +'  ' + ponderacion + ' %' )
      ultimaNota2.appendChild(ultimaNotaContenido2);
      document.getElementById('listNotas2').appendChild(ultimaNota2);

      document.getElementById('mediaPonderada').innerHTML = mediaPonderada;
    }
    return;
  }
});



// ---------------App4---------------
var barraNovia = 100, barraAmigo = 100, barraFamilia = 100;

document.getElementById('embarradas').addEventListener('click', function() {

  var size = document.getElementById('size').value;
  var persona =document.getElementById('persona').value;

  function tamano(tamano) {
      var barra;
      switch (tamano) {
        case 'pequena':
            barra =  -10;
        break;
        case 'mediana':
            barra = -20;
        break;
        case' grande':
            barra = -40;
        break;
      }
      return barra;
    }
  function tolerancia(barra, quien) {
    document.getElementById('bienNovia').style.background = 'none';
    document.getElementById('regularNovia').style.background = 'none';
    document.getElementById('malNovia').style.background = 'none';
    document.getElementById('bienFamilia').style.background = 'none';
    document.getElementById('regularFamilia').style.background = 'none';
    document.getElementById('malFamilia').style.background = 'none';
    document.getElementById('bienAmigo').style.background = 'none';
    document.getElementById('regularAmigo').style.background = 'none';
    document.getElementById('malAmigo').style.background = 'none';


    if (barra > 70 && quien == 'novia') {
      document.getElementById('bienNovia').style.background = '#4BB543';
    }else if (barra <= 70 && barra >= 40 && quien == 'novia') {
      document.getElementById('regularNovia').style.background = '#e2c044';
    }else if (barra < 40 && quien == 'novia') {
      document.getElementById('malNovia').style.background = '#b6372b';
    }

    if (barra > 70 && quien == 'familia') {
      document.getElementById('bienFamilia').style.background = '#4BB543';
    }else if (barra <= 70 && barra >= 40 && quien == 'familia') {
      document.getElementById('regularFamilia').style.background = '#e2c044';
    }else if (barra < 40 && quien == 'familia') {
      document.getElementById('malFamilia').style.background = '#b6372b';
    }

    if (barra > 70 && quien == 'amigo') {
      document.getElementById('bienAmigo').style.background = '#4BB543';
    }else if (barra <= 70 && barra >= 40 && quien == 'amigo') {
      document.getElementById('regularAmigo').style.background = '#e2c044';
    }else if (barra < 40 && quien == 'amigo') {
      document.getElementById('malAmigo').style.background = '#b6372b';
    }

  }

  switch (persona) {
    case 'novia':
      barraNovia = barraNovia + tamano(size);
      tolerancia(barraNovia, persona);
      if (barraNovia < 0 ) {
        barraNovia = 100;
      }
      break;
    case 'familia':
      barraFamilia = barraFamilia + tamano(size);
      tolerancia(barraFamilia, persona);
      if (barraFamilia < 0) {
        barraFamilia = 100;
      }
      break;
    case 'amigo':
      barraAmigo = barraAmigo + tamano(size);
      tolerancia(barraAmigo, persona);
      if (barraAmigo < 0) {
        barraAmigo = 100;
      }
      break;
  }

})





// ----------------App 5----------------
var contador = 0, edades = [],edad, edadMayor = 0,edadMenor = 0;

document.getElementById('anadirEdad').addEventListener('click', function() {
  edad = document.getElementById('input-edades').value;

  if (edad == '' || parseInt(edad) <= 0) {
    alert('Porfavor introduzca una edad valida');
  }else {
    edad = parseInt(edad)
    edades.push(edad);
    contador++;

    edadElemento = document.createElement('li');
    edadContenido = document.createTextNode('Edad '+ contador + ': '+ edad);
    edadElemento.appendChild(edadContenido);
    document.getElementById('listEdades').appendChild(edadElemento);

    for (var i = 0; i < edades.length; i++) {
      if(edad > edades[i] && edad > edadMayor){
        edadMayor = edad;
      }else if (edades.length == 1) {
        edadMayor = edad;
      }
    }
    for (var i = 0; i < edades.length; i++) {
      if(edad < edades[i] && edad < edadMenor){
        edadMenor = edad;
      }else if (edades.length == 1) {
        edadMenor = edad;
      }
    }
    document.getElementById('edadMayor').innerHTML = edadMayor;
    document.getElementById('edadMenor').innerHTML = edadMenor;
  }








});



//----------------- App 6-----------------
var balance = 0, sumaGastos = 0;
var sumaGasto = [0,0,0,0],resultadoPonderado = [0,0,0,0] ;


document.getElementById('btn-gastos').addEventListener('click', function() {
  // ----------------Validacion----------------
  var monto = document.getElementById('inputMonto').value;
  var categoria = document.getElementById('categoria').value;

  if (monto == '' || parseFloat(monto) < 1) {
    alert('Ingrese un monto Valido');
  }else {
    monto = parseFloat(monto);

//---------------Proyectar Balance---------------
    if (categoria != 'ingreso') {
      balance -= monto;
    }else if (categoria === 'ingreso') {
      balance += monto;
    }
    document.getElementById('balance').innerHTML = balance;
//---------------Proyectar ultimos gastos---------------

    var ultimoGasto = document.createElement('li');
    var ultimoGastoContenido = document.createTextNode(categoria + ' ' + monto + ' $')
    ultimoGasto.appendChild(ultimoGastoContenido);
    document.getElementById('listGastos').appendChild(ultimoGasto);
//-----------------------alcular En que gasta-----------------------

    if (categoria != 'ingreso') {
      sumaGastos += monto;
    }


    function enQueGasto(puesto) {
      var resultadoGasto = 0;
      sumaGasto[puesto] += monto;
      resultadoPonderado[puesto] = (sumaGasto[puesto]*100)/sumaGastos;
      for(var i in resultadoPonderado){
        resultadoPonderado[i] = (sumaGasto[i]*100)/sumaGastos;
      }
      return parseFloat(resultadoPonderado[puesto]);
    }

    function refresh() {
      document.getElementById('comida').innerHTML = resultadoPonderado[0]+ ' %';
      document.getElementById('transporte').innerHTML = resultadoPonderado[1]+ ' %';
      document.getElementById('diversion').innerHTML = resultadoPonderado[2]+ ' %';
      document.getElementById('facturas').innerHTML = resultadoPonderado[3]+ ' %';
    }

    if (categoria == 'comida') {
      document.getElementById('comida').innerHTML = enQueGasto(0) + ' %';
      refresh();
    }
    if (categoria == 'transporte') {
      document.getElementById('transporte').innerHTML = enQueGasto(1) + ' %';
      refresh();
    }
    if (categoria == 'diversion') {
      document.getElementById('diversion').innerHTML = enQueGasto(2) + ' %';
      refresh();
    }
    if (categoria == 'facturas') {
      document.getElementById('facturas').innerHTML = enQueGasto(3) + ' %';
      refresh();
    }

  }

});

//--------------------------------- app7---------------------------------
var contadorbd= 0, ccs=[],nombres =[], apellidos=[], emails=[], telefonos= [], i;



//-----------------------nadiendo persona-----------------------
document.getElementById('guardarPersona').addEventListener('click', function(e) {

  var cc = document.getElementById('cc').value;
  var nombre = document.getElementById('nombre').value.toUpperCase();
  var apellido = document.getElementById('apellido').value.toUpperCase();
  var email = document.getElementById('email').value.toLowerCase();
  var telefono = document.getElementById('telefono').value;


  if (cc == '' || parseInt(cc) <= 0 ) {
      alert('Porfavor introduzca un cedula valida')

  }else if (nombre == '') {
    alert('Porfavor introduzca un nombre');
  }else if (apellido == '') {
    alert('Porfavor introduzca un apellido');
  }else if (telefono.length != 10) {
    alert('Porfavor introduzca un celular valido');

  }
  function validar(cc) {
     for (var i = 0; i < ccs.length; i++) {
       if(parseInt(cc) == ccs[i]){
         alert('Porfavor introduzca un cedula valida y/o unica');
         return false;
       }else {
         return true;
       }
     }

   }
  if (validar(cc) != false){
    ccs[contadorbd] = parseInt(cc);
    nombres[contadorbd] = nombre;
    apellidos[contadorbd] = apellido;
    emails[contadorbd] = email;
    telefonos[contadorbd] = telefono;
    contadorbd++;

  }


});

document.getElementById('btn-busqueda').addEventListener('click', function() {

  var ccBuscar = document.getElementById('cc-buscar').value;
  var nombreBuscar = document.getElementById('nombre-buscar').value;
  function buscarcc(cc) {
    for (var i = 0; i < ccs.length; i++) {
     if (parseInt(cc) === ccs[i]) {
       return i;
     }
    }
  }
  function buscarNombre(nombre) {
    for (var i = 0; i < ccs.length; i++) {
     if (nombre.toUpperCase() === nombres[i]) {
       return i;
     }
    }
  }





  if (ccBuscar == '' && nombreBuscar == '') {
    alert('Ingrese al menos un campo para la busqueda');
  }else if (ccBuscar != '') {
    var indice =buscarcc(ccBuscar)
    document.getElementById('cc-proyectar').innerHTML = ccs[indice];
    document.getElementById('nombre-proyectar').innerHTML = nombres[indice];
    document.getElementById('apellido-proyectar').innerHTML = apellidos[indice];
    document.getElementById('email-proyectar').innerHTML = emails[indice];
    document.getElementById('telefono-proyectar').innerHTML = telefonos[indice];

  console.log(buscarcc(ccBuscar));
  }else if (nombreBuscar != '') {
    var indice2 = buscarNombre(nombreBuscar);
    console.log(buscarNombre(nombreBuscar));
    document.getElementById('cc-proyectar').innerHTML = ccs[indice2];
    document.getElementById('nombre-proyectar').innerHTML = nombres[indice2];
    document.getElementById('apellido-proyectar').innerHTML = apellidos[indice2];
    document.getElementById('email-proyectar').innerHTML = emails[indice2];
    document.getElementById('telefono-proyectar').innerHTML = telefonos[indice2];

  console.log(buscarcc(ccBuscar));
  }

});;
