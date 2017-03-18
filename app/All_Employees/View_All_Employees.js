(
 function () {

     function view_all_emps_ctrl($scope, $http, $stateParams, $state, login_svc) {
         //$scope.emp_details_visible = false;
         login_svc.get_employees()
             .then(function (response) {                 
                 $scope.allEmployees = response.data.employees;
             })
             .catch(function (error) {
                 console.log(error);
             });
                
         $scope.parameter_value = $stateParams.name;

         $scope.check_emp = function (emp_obj) {
             $scope.emp_details_visible = true;
             $scope.emp_personal_details = emp_obj;
         }
     }
     angular.module('view_employees', ["ui.router"]);
     angular.module('view_employees')
     .controller('view_all_emps_ctrl', ["$scope", "$http", "$stateParams", "$state", "login_svc", view_all_emps_ctrl]);

 }
 )();