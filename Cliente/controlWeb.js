function ControlWeb() {
    this.comprobarSesion = function () {
        let nick = localStorage.getItem("nick");
        if (!nick) {
            cw.mostrarAgregarUsuario();
        }
        else {
            cw.mostrarHome();
        }
    }
    this.mostrarAgregarUsuario = function () {
        this.limpiar();
        let cadena = '<div id="mAU" class="form-group">';
        cadena = cadena + '<label for="nick">Introduce un nick: </label>';
        cadena = cadena + '<input type="text" class="form-control" id="nick">';
        cadena = cadena + '<button id="btNAU" type="submit" class="btn btn-primary">Agregar usuario</button>';
        cadena = cadena + '<div id=msg></div>'
        cadena = cadena + '</div>';

        $('#au').append(cadena); //Aquí se inicia la ejecución del cuestionario

        $('#btNAU').on("click", function () {
            let nick = $("#nick").val();
            rest.agregarUsuario(nick)
        });

    }
    this.mostrarHome = function () {
        $('#mAU').remove(); //Borras este formulario
        $('#mH').remove();
        let cadena = "<div id='mH'><h2>Bienvenido a la tierra de Gharbast...</h2></div>";
        $('#au').append(cadena);
    }
    this.mostrarMsg = function (cadena) {
        $('#txt').remove();
        let cadena2 = "<div id='txt'>" + cadena + '</div>';
        $('#msg').append(cadena);
    }
    this.salir = function () {
        let nick = localStorage.getItem("nick");
        if (nick || nick == "") {
            rest.eliminarUsuario(nick);
        }
    }
    this.limpiar = function () {
        $("#txt").remove();
        $("#mH").remove();
        $("#mAU").remove();
    }
}