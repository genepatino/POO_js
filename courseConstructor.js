class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}