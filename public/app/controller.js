'use strict';

angular.module('angularmeetupteachrApp')
.controller('MainCtrl', function ($scope, $http) {
    

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
    

});