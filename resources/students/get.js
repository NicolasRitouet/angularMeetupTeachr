if (query.includeClass) {
    dpd.classes.get(query.classId, function(data) {
        this.clazz = data;
    });
}