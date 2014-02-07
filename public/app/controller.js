'use strict';

angular.module('angularmeetupteachrApp')
.controller('MainCtrl', function ($scope, $http, $log, $location, $cookieStore) {
    

    $scope.currentUser = $cookieStore.get('user');
    // Load the classes
    $http.get('/classes').success(function(data) {
        $scope.clazzes = data;
    });

    // add a class
    $scope.addClass = function(className) {
        $http.post("/classes", {name: className}).success(function(data) {
            $scope.clazzes.push(data);
            $scope.clazz = data;
        });
    }

    // load students for a class
    $scope.displayStudents = function(clazz) {
        $http.get('/students', { params: {classId: clazz.id, includeClass: true}}).success(function(data) {
            $scope.students = data;
        });
    }

    $scope.addStudent = function(newStudent, clazz) {
        newStudent.classId = clazz.id;
        $http.post('/students', newStudent).success(function(data) {
            delete $scope.newStudent;
            data.clazz = clazz;
            if ($scope.students) $scope.students = [];
            $scope.students.push(data);
        });
    }

    $scope.removeStudent = function(student) {
        var params = student;
        $log.log(student);
        $http.delete('/students/' + student.id).success(function(data) {
            var index = $scope.students.indexOf(student);
            $scope.students.splice(index, 1);
        });
    }


    /*****************/
    /* LOGIN */
    /*****************/
    $scope.login = function(credentials) {
        var params = {
            username: credentials.username,
            password : credentials.password
        }
        $http.post('/users/login', params).success(function(data) {
            $scope.currentUser = {
                username: credentials.username,
                isAuthenticated: true,
                sessionId: data.id,
                id: data.uid
            }
            $cookieStore.put('user', $scope.currentUser);
            delete $scope.credentials;
            $location.path("/");
        }).error(function(data) {
            $log.log("Login failed: ", data);
        });
    }

    $scope.logout = function () {
        $http.post('/users/logout').success(function (result, err) {
            $cookieStore.remove('user');
            $scope.currentUser = null;
        });
    };
    

});