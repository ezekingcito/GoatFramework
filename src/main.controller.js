class Main {

    constructor(nombre, apellido, edad, estatura) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.estatura = estatura
    }
    mostrarDatos() {
        console.info(`
            NOMBRE: ${this.nombre},
            APELLIDO: ${this.apellido},
            EDAD: ${this.edad},
            ESTATURA: ${this.estatura}
        `);
    }
    actualizarDatos(nombre = this.nombre, apellido = this.apellido, edad = this.edad, estatura = this.estatura){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.estatura = estatura
        this.mostrarDatos()
    }
    setNombre(nombre) {
        return this.nombre = nombre
    }
    getNombre(){
        return this.nombre
    }
    setApellido(apellido) {
        return this.apellido = apellido
    }
    getApellido(){
        return this.apellido
    }
    seEdad(edad) {
        return this.edad = edad
    }
    getEdad(){
        return this.edad
    }
    setEstatura(estatura) {
        return this.estatura = estatura
    }
    getestatura(){
        return this.estatura
    }
}

let persona1 = new Main("Juan", "De la cruz", 27, 180)
let persona2 = new Main("Eduardo", "De la cruz", 20, 183)

persona1.actualizarDatos("Ezequiel", "Mendoza")
persona2.mostrarDatos()