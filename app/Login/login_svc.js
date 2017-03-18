/// <reference path="../../bower_components/angular/angular.min.js" />
(
    function () {

        function login_svc($http, $q) {
            this.get_users = function () {
                var dfd = $q.defer();
                $http.get("Data/users.json")
                .then(function (response) {
                    console.log(response);
                    dfd.resolve(response);
                })
                .catch(function (error) {
                    console.log(error);
                    dfd.reject(error);
                })

                return dfd.promise;
            }

            this.getcountries = function () {
                var dfd = $q.defer();
                $http.get("Data/countries.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function(error){
                    dfd.reject(error)
                })
                return dfd.promise;
            }

            this.get_states = function () {
                var dfd = $q.defer();
                $http.get("Data/states.json")
                .then(function (res) {
                    dfd.resolve(res);
                })
                .catch(function (error) {
                    dfd.reject(error);
                })
                return dfd.promise;
            }

            this.get_cities = function () {
                var dfd = $q.defer();
                $http.get('Data/cities.json')
                .then(function (res) {
                    dfd.resolve(res);
                })
                .catch(function (error) {
                    dfd.reject(res);
                })
                return dfd.promise;
            }

            this.get_employees = function () {
                var dfd = $q.defer();
                $http.get("Data/employees.json")
                .then(function (response) {
                    dfd.resolve(response);
                })
                .catch(function (error) {
                    dfd.reject(error);
                })

                return dfd.promise;
            }
        }

        angular.module("Login")
        .service("login_svc", ["$http", "$q", login_svc])
    }
)();