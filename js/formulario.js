function validarDatos(){
  window.event.preventDefault();
 
  if(document.formulario.nombre.value == ""){
    alert("Campo Nombre es obligatorio")
    document.formulario.nombre.focus();
  }
  else if (document.formulario.email.value == ""){
    alert("Campo Email es obligatorio")
    document.formulario.email.focus();
    }else if (document.formulario.email.value.indexOf("@")==-1 && document.formulario.email.value.indexOf(".") == -1){
      alert("El Email es invalido")
      document.formulario.email.focus();

  }else if  (document.formulario.asunto.value == ""){
    alert("Campo Asunto es obligatorio")
    document.formulario.asunto.focus();
  }else if  (document.formulario.mensaje.value == ""){
  alert("Campo Mensaje es obligatorio")
  document.formulario.mensaje.focus();
  }else{
    document.formulario.reset()
    }
}

document.querySelector("form").addEventListener("submit", validarDatos);


let input = document.querySelector(".input-padron");
let button = document.querySelector(".boton-enviar");
button.disabled = true;
input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".input-padron").value === "") {
    button.disabled = true; 
  } else {
    button.disabled = false;
  }
}

/*
let check = document.querySelector('.check');
check.addEventListener('click', idioma);

function idioma() {
    let id = check.checked;

    if(id == true) {
        location.href = 'index.html';
    } else {
        location.href = '../index.html';
    }
}

*/

