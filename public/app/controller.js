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
        $http.get('/students', { params: {classroomId: classroom, includeClassroom: true}}).success(function(data) {
            $scope.students = data;
        });
    }

    $scope.addStudent = function(newStudent, classroom) {
        newStudent.classroomId = classroom;
        $http.post('/students', newStudent).success(function(data) {
            delete $scope.newStudent;
            $scope.students.push(data);
        });
    }
    

});