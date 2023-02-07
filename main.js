/* EJERCICIO ESTUDIANTES DE PLATZI */


const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});


const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const juancito = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

class TeacherStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }

  publicarComentario(commentContent) {
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",
    });
    comment.publicar();
  }
}
const freddy = new TeacherStudent({
  name: "Freddy Vega",
  username: "freddier",
  email: "f@gep.com",
  instagram: "freddiervega",
});

/* function videoPlay(id){
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Se está reproduciendo desde la url "+urlSecreta);
}

function videoStop(id){
  const urlSecreta="https://platziultrasecretomasquelanasa.com/"+id;
  console.log("Pausamos la url "+urlSecreta);
}

class PlatziClass{
  constructor({
    name,videoID,
  }){
    this.name=name;
    this.videoID=videoID;
  }
reproducir(){
  videoPlay(this.videoID);
}

pausar(){
  videoStop(this.videoID);
}}

const clase67 = new PlatziClass({
  name: "JavaScript: orientado a objetos, basado en prototipos",
  videoID: "14521dsgdf",
});

clase67.reproducir();
clase67.pausar(); */
