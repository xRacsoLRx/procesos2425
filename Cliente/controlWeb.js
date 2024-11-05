function ControlWeb() {
    this.mostrarAgregarUsuario = function () {
        $('#mAU').remove();
        let cadena = '<div id="mAU" class="form-group">';
        cadena = cadena + '<label for="nick">Introduce un nick: </label>';
        cadena = cadena + '<input type="text" class="form-control" id="nick">';
        cadena = cadena + '<button id="btNAU" type="submit" class="btn btn-primary">Agregar usuario</button>';
        cadena = cadena + '<div id=msg></div>'
        cadena = cadena + '</div>';

        $('#agregarUsuario').append(cadena); //Aquí se inicia la ejecución del cuestionario

        $('#btNAU').on("click", function () {
            let nick = $("#nick").val();
            rest.agregarUsuario(nick)
        });

    }
    this.mostrarHome = function () {
        $('#mAU').remove(); //Borras este formulario
        $('#mH').remove();
        let cadena = "<div id='mH'><h2>Bienvenido al sistema</h2></div>";
        $('#agregarUsuario').append(cadena);
    }
    this.mostrarMsg = function (cadena) {
        $('#txt').remove();
        let cadena2 = "<div id='txt'>" + cadena + '</div>';
        $('#msg').append(cadena);
    }
    this.comprobarSesion = function () {
        let nick = localStorage.getItem("nick");
        if (nick) {
            cw.mostrarMensaje("Bienvenido al sistema, " + nick);
        }
        else {
            cw.mostrarAgregarUsuario();
        }
    }
    
}