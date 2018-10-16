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
