if (query.includeClassroom) {
    dpd.classrooms.get(query.classroomId, function(data) {
        this.classroom = data;
    });
}