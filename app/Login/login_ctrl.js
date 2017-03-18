/// <reference path="../../bower_components/angular/angular.min.js" />
(
    function () {
        function LoginCtrl($scope, $stateParams, $state,$filter ,$rootScope, login_svc) {
            //Code is commented for Security Purpose as password is visible in the URL
            $scope.username = sessionStorage.getItem("username");
            $scope.password = sessionStorage.getItem("password");
            $scope.userid = sessionStorage.getItem("userid");
            $scope.add_visible = false;
            $scope.view_visible = false;
            
            $scope.hdr_title = "Welcome to  " + $scope.username + "";

            console.log("The Header Title==>" + $scope.hdr_title);

            $scope.personal_details = {
                name: "",                                
                email: '',
                gender: '',
                country: '',
                state: '',
                city:''
            }

            $scope.add_personal = function () {               
                $scope.add_visible = true;
                $scope.view_visible = false;
            }

            

            login_svc.getcountries()
            .then(function (response) {
                $scope.countries = response.data.countries;
            })
            .catch(function (error) {
                console.log(error);
            });

            login_svc.get_states()
            .then(function (response) {
                $scope.get_all_states = response.data.states;
            })
            .catch(function (error) {
                console.log(error);
            });

            login_svc.get_employees()
            .then(function (response) {
                $scope.allEmployees = response.data.employees;
            })
            .catch(function (error) {
                console.log(error);
            });

            $scope.cntry_change = function () {
                //alert('Hello==>' + $scope.personal_details.country);
                //$scope.states = ($filter('filter')($scope.get_all_states, { ctycode: $scope.personal_details.country }))
                $scope.states = ($filter('filter')($scope.get_all_states, { ctycode: $scope.personal_details.country }));
            }

            login_svc.get_cities()
            .then(function (response) {
                $scope.get_all_cities = response.data.cities;
            })
            .catch(function (error) {
                console.log(error);
            });

            $scope.state_change = function () {
                $scope.cities = ($filter('filter')($scope.get_all_cities, { state_code: $scope.personal_details.state }));
            }

            $scope.personal_save = function () {
                alert("Personal Data Saved");
                console.log("The Value of country  is==>" + $scope.personal_details.country);
                console.log("The Value of state is==>" + $scope.personal_details.state);
                console.log("The Value of city is==>" + $scope.personal_details.city);
                //alert("The country Value is " + $scope.personal_details.country);
                //alert("The Name Value is " + $scope.personal_details.name);
                //alert("The Name Value is " + $scope.personal_details.email);
                //alert("The Name Value is " + $scope.personal_details.gender);
                // console.log("The Personal Details ==>" + $scope.personal_details);
            }
            $scope.view_personal = function () {
                console.log($scope.personal_details);
                if ($scope.personal_details.state != "" && $scope.personal_details.name != "" && $scope.personal_details.gender != "" && $scope.personal_details.email != "" && $scope.personal_details.country != "" && $scope.personal_details.city != "") {
                    $scope.add_visible = false;
                    $scope.view_visible = true;
                }
                else {
                    alert('Please Enter Personal Details');
                }
                
            }
            
            $scope.add_perosnal_routing = function () {
                $state.go('Add_Routing');
            }

            $scope.view_all_emps = function () {                
                $state.go('All_Employees',{ name:'venkataramana 12345'});
            }
                      
        }

        angular.module("Login")         
        .controller("LoginCtrl", ["$scope", "$stateParams", "$state", "$filter", "$rootScope", "login_svc", LoginCtrl])

    }
)();