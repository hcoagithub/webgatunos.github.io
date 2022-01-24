
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin: 10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            900:{
                items:3
            }
        }
    })

})



$(document).ready(function () {


    jQuery.validator.addMethod("letras", function(value, element) {
        return this.optional(element) || /^[a-zA-ZÀ-ÿ / ]+$/i.test(value);
      }, "Debe tener solo letras");


$("#formulario").validate({
  rules: {
      correo: {
        required: true,
      },
    run: {
      required: true,
      number: true,
      minlength: 8,
      maxlength: 8,
    },
    digito: {
      required:   function () {
        if (
          $("#digito").val() == "k" ||
          $("#digito").val() <= 9 &&
          $("#digito").val() >= 0
        ) {
            let mensaje = document.getElementById("error");
            if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
                
                mensaje.innerHTML = "";
            }
        }else {
            let mensaje = document.getElementById("error");
          mensaje.innerHTML = "ingrese un digito del 0 a el 9 o una letra k";
        }
    },
      minlength: 1,
      maxlength: 1,
    },
    nombre: {
      required: true,
      minlength: 3,
      maxlength: 20,
      letras: true,
    },
    telefono: {
        required: false,
        minlength: 9,
        maxlength: 9,
    }
  },
  messages: {
      correo :{
          required: " Este campo es requerido, y debe ser un correo correcto."
      },
    run: {
      required: "Ingrese su rut",
      maxlength: "Solo debe contener 8 digitos y sin espacio",
      number: "Solo debe contener numeros sin espacios",
    },
    digito: {
      required: "Debe ingresar un digito verificador",
      minlength: "Debe agregar su digito verificador",
      maxlength: "Solo debe contener 1 caracter",
    },
    nombre: {
      required: "Ingrese su nombre",
      minlength: "Debe tener mas de 3 caracteres",
      maxlength: "No puede tener mas de 20 caracteres",
      
    },
    telefono: {
        minlength: "Debe contener solo 9 digitos",
        maxlength: "Debe contener solo 9 digitos"
    }
  },
  submitHandler: function () {
    if (
      $("#digito").val() == "k" ||
      $("#digito").val() <= 9 &&
      $("#digito").val() >= 0
    ) {
        let mensaje = document.getElementById("error");
        if ( $("#digito").val() > 0 ||  $("#digito").val() == ""){
            
            mensaje.innerHTML = "";
        }
    } else {
        let mensaje = document.getElementById("error");
      mensaje.innerHTML = "ingrese un digito del 0 a el 9 o una letra k";
    }
    document.getElementById("formulario").submit();
}
})
});



