class StudentPlatzi {
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
    addApprovedCourses(newApprovedCourses){
      this.approvedCourses.push(newApprovedCourses)
    }
}