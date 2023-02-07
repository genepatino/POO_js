class Student {
    constructor({
      name,
      email,
      username,
      twitter,
      instagram,
      facebook,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
      });
      comment.publicar();
    }
}