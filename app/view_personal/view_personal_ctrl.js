(
    function () {

        function view_personal_ctrl($scope, $stateParams,$state) {
            $scope.show_emp_dtls = { name: $stateParams.name, email: $stateParams.email};
            $scope.show_emp_name = $stateParams.name;

            $scope.goback = function () {
                $state.go("personal_dtls_back");
            }
        }

      var app=  angular.module('view_emp', []);
      app.controller('view_personal_ctrl', ["$scope","$stateParams","$state", view_personal_ctrl])
        
    }
    
 )();