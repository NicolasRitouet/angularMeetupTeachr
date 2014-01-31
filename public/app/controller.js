'use strict';

angular.module('angularmeetupteachrApp')
.controller('MainCtrl', function ($scope, $http, $log) {
    

    // Load the classrooms
    $http.get('/classrooms').success(function(data) {
        $scope.classrooms = data;
    });

    // add a classroom
    $scope.addClassroom = function() {
        $http.post("/classrooms", {name: $scope.classroomName}).success(function(data) {
            $scope.classrooms.push(data);
        });
    }

    // load students for a classroom
    $scope.displayStudents = function(classroom) {
        $http.get('/students', { params: {classroomId: classroom.id, includeClassroom: true}}).success(function(data) {
            $scope.students = data;
        });
    }

    $scope.addStudent = function(newStudent, classroom) {
        newStudent.classroomId = classroom.id;
        $http.post('/students', newStudent).success(function(data) {
            delete $scope.newStudent;
            data.classroom = classroom;
            $scope.students.push(data);
        });
    }

    $scope.remove = function(student) {
        var params = student;
        $http.delete('/students', {params: params}).success(function(data) {
            var index = $scope.students.indexOf(student);
            $scope.students.splice(index, 1);
        });
    }
    

});