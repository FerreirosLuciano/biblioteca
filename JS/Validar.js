function validar_modificar_materia() {
    //funcion para valiar el formulario de la pagina ModificarMaterias.htm
    var todoCorrecto = true;
    var formulario = document.formulario_modificar_materia;		

    todoCorrecto*=Validar_numero(formulario.numerom);
    todoCorrecto*=Validar_largo_numero(formulario.numerom);
    todoCorrecto*=Validar_texto(formulario.nombrem);
    todoCorrecto*=Validar_largo_caracteres(formulario.nombrem);
    todoCorrecto*=Validar_imagen(formulario.logom);

    if (todoCorrecto ==true) {
        formulario.submit();
    }
    else {
        //detener la acción por defecto (sumbit)
        event.preventDefault();
    }
}

function validar_alta_materia_usuario(){
    //funcion para valiar el formulario de la pagina AltaMatUsu.htm 
    var todoCorrecto = true;
    var formulario = document.formulario_alta_materia_usuario;

    todoCorrecto*=Validar_numero(formulario.num_materia);
    todoCorrecto*=Validar_largo_numero(formulario.num_materia)
    todoCorrecto*=Validar_texto(formulario.nom_materia);
    todoCorrecto*=Validar_largo_caracteres(formulario.nom_materia);
    todoCorrecto*=Validar_select(formulario.tipo_doc);
    todoCorrecto*=Validar_documento(formulario.documento);
    todoCorrecto*=Validar_numero(formulario.documento);
    todoCorrecto*=Validar_texto(formulario.nombre);
    todoCorrecto*=Validar_texto(formulario.apellido);
    todoCorrecto*=Validar_division(formulario.division);

    if (todoCorrecto ==true) {
        formulario.submit();
    }else {
        //detener la acción por defecto (sumbit)
        event.preventDefault();
    }
}

 function Validar_texto(ObjElemento){

    var resultado=true;
	
	if(  /^[a-zA-Z\s]+$/.test(ObjElemento.value)==false || /^[1-9]/.test(ObjElemento.value)==true){
	    alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
        resultado=false;
	}
    return resultado;	  
}

/* $(document).ready(function Validar_texto(ObjElemento) {
    resultado=true;

    if((/^[a-zA-Z\s]+$/).test(ObjElemento).value==false || (/^[1-9]/).test(ObjElemento).value==true){
        alert('Campo ' + (ObjElemento).name + ' es incorrecto. ');
        resultado=false;
    }
    return resultado;
}); */


function Validar_numero(ObjElemento){

    var resultado=true;
	
	if(isNaN(ObjElemento.value)==true || /^[1-9]/.test(ObjElemento.value)==false){
	   alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
       resultado=false;
	}
    return resultado;	  
}

function Validar_division(ObjElemento){

    var resultado=true;
	
	if(/^[a-zA-Z\s]/.test(ObjElemento.value)==true || /^[1-9]/.test(ObjElemento.value)==false){
	   alert('Campo ' + ObjElemento.name + ' es incorrecto. ');
       resultado=false;
	}
    return resultado;	  
}

function Validar_largo_caracteres(ObjElemento){

    var resultado=true;
    var num=50;
    var largo = ObjElemento.value;
    var cantidad = largo.length 

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;
}

function Validar_largo_numero(ObjElemento){

    var resultado=true;
    var num=3;
    var largo = ObjElemento.value;
    var cantidad = largo.length 

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;
}

function Validar_imagen(ObjElemento){

    var resultado=true;

    if (!(/\.(gif|jpeg|jpg|png)$/i).test(ObjElemento.value)) {
        alert('El archivo a adjuntar no es una imagen');
        var resultado=false;
    }
    return resultado;
}

function Validar_select(ObjElemento){

    var resultado=true;

    if(ObjElemento.value == 0||ObjElemento.value== ""){
        alert('Campo ' + ObjElemento.name + ' no fue seleccionado');
        resultado= false;
    }
    return resultado;
}

function Validar_documento(ObjElemento){

    var resultado=true;
    var num=10;
    var largo = ObjElemento.value;
    var cantidad = largo.length

    if(cantidad > num){
        alert('Campo ' + ObjElemento.name + ' debe tener un maximo de ' + num + ' caracteres');
        resultado=false;
    }
    return resultado;	  
}

/* function Mostrar_cantidad_materias(){
	var materias = document.getElementById("tabla-materias").rows.length;
	materias = materias - 1;
	document.write("<p class='cantidad' >Cantidad de materias: " + materias + " </p>");
} */

// function Mostrar_cantidad_alumnos(){
// 	var alumnos = document.getElementById("tabla-alumnos").rows.length;
// 	alumnos = alumnos - 1;
//     document.write("<p class='cantidad' > Cantidad de alumnos: "+ alumnos +" </p>");
// }

// Mostrar cantidad de alumnos
$(document).ready(function() {
    cantidad_alumnos = $('#tabla-alumnos tr').length;
    $('#cantidad-alumnos').text("La cantidad de alumnos es " + (cantidad_alumnos - 2));
});

// Mostrar cantidad de materias
$(document).ready(function () {
    cantidad_materias = $('#tabla-materias tr').length;
    $('#cantidad-materias').text("La cantidad de materias es " + (cantidad_materias - 2));
});