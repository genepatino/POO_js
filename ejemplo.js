/* OBJETO LITERAL */

const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados: [
      "Curso Definitivo de HTML y CSS",
      "Curso Práctico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito) {
      this.cursosAprobados.push(nuevoCursito);
    },
  };
  
/* PROTOTIPO */
function Student(name, age, cursosAprobados) {
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCursito) {
    //   this.cursosAprobados.push(nuevoCursito);
    // }
}
Student.prototype.aprobarCurso = function (nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
}

/* INSTANCIA DE UN PROTOTIPO */

const juanita = new Student(
  "Juanita Alejandra",
  15,
  [
      "Curso de Introducción a la Producción de Videojuegos",
      "Curso de Creación de Personajes",
  ],
);

juanita.aprobarCurso('Curso de Excel')

console.log(juanita) // "Juanita Alejandra", 15, ["Curso de Introducción a la Producción de Videojuegos","Curso de Creación de Personajes", 'Curso de Excel'],

/* PROTOTIPO CON LA SINTAXIS CLASE  */

/* AL CONSTRUCTOR DE NUESTRA CLASE EN LUGAR DE PASARLE PARAMETRO POR PARAMETRO, VAMOS A PASAR UN PARAMETRO DE TIPO OBJETO CON LAS CLAVES QUE VA A RECIBIR. DE ESTA FORMA AL CREAR LA INSTANCIA DE ESE PROTOTIPO, NO VA A IMPORTAR EL ORDEN EN QUE PASEMOS LOS ARGUMENTOS. */

class Student2 {
  constructor({
    name,
    cursosAprobados = [],
    age,
    email,
  }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});