const modelo = require('./modelo.js');
describe('El sistema', function () {
  let sistema;

  beforeEach(function () {
    sistema = new modelo.Sistema()
  });

  it('inicialmente no hay usuarios', function () {
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);
  });

  it("comprobamos agregar usuario con nick", function () {
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);

    //agregar un usuario concreto
    let res = sistema.agregarUsuario("Pepe");

    // Comprobar que el usuario ha sido agregado correctamente
    expect(res.nick).toEqual("Pepe");

    //comprobar que hay 1 usuario en el sistema
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(1);

    //comprobar que el único que hay es el que acabamos de incluir
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);
  });

  it("comprobamos eliminar usuario", function () {
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);

    //agregamos un usuario
    sistema.agregarUsuario("Pepe");

    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(1);

    //eliminamos el usuario
    let res = sistema.eliminarUsuario("Pepe");

    //comprobamos que el resultado JSON indica que ha sido eliminado
    expect(res.eliminado).toEqual(true);

    //verificar que no hay usuarios tras la eliminación
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);

    //verificar que el usuario no esta activo
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(false);
  });

  it("comprobar usuario activo", function () {
    //comprobar que no hay usuarios
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);

    //agregamos un usuario
    sistema.agregarUsuario("Pepe");

    //comprobamos que el usuario creado esta en el sistema
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(1);

    //comprobar que el usuario "Pepe" está activo
    expect(sistema.usuarioActivo("Pepe").activo).toEqual(true);

    //comprobar un usuario que no existe
    expect(sistema.usuarioActivo("Juan").activo).toEqual(false);

  });

  it("comprobar el método número de usuarios", function () {
    //calcular las claves del array asociativo Object.keys(sistema.usuarios)
    //comprobamos que el valor por numeroUsuarios() es igual anterior
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(0);
    sistema.agregarUsuario("Pepe");
    expect(sistema.numeroUsuarios().numeroUsuarios).toEqual(1);
  });

});