/// <reference path="bower_components/angular/angular.min.js" />
(
function () {

    function My_Ctrl($scope, $state, $rootScope, login_svc, $filter) {
        $scope.login_form = true;
        $scope.login_credentials = {
            username: "",
            password:""
        }
        login_svc.get_users()
        .then(function (response) {
            $scope.users = response.data.users;
            console.log($scope.users);
        })
        .catch(function (error) {
            console.log(error);
        })
        $scope.login = function () {            
            var found = $filter('filter')($scope.users, { username: $scope.login_credentials.username }, true);
            if (found.length) {
                $scope.selected = JSON.stringify(found[0]);
                if ((found[0].username == $scope.login_credentials.username) && (found[0].password == $scope.login_credentials.password)) {
                    $scope.login_form = false;
                    sessionStorage.setItem("username", $scope.login_credentials.username);
                    sessionStorage.setItem("password", $scope.login_credentials.password);
                    sessionStorage.setItem("userid", found[0].userid);
                    
                    //Code is commented for Security Purpose as password is visible in the URL
                    //$state.go('Login', { username: $scope.login_credentials.username, password: $scope.login_credentials.password });

                    $state.go('Login');
                }
                else {
                    $scope.selected = 'UserName and Password is Not Valid';
                    alert($scope.selected);
                }
                

            } else {
                $scope.selected = 'UserName is Not Found';
                alert($scope.selected);
            }
            
            
            
        }
    }

    angular.module('My_Hrms', ["ui.router", "Login", "Components", "view_employees", "view_emp"])
    .config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
        var LoginObj = {            
            name: "Login",
            views:{
                '':{
                    templateUrl: "app/Login/Login_After.html",
                    controller: "LoginCtrl"
                }
                ,'Add_Routing':{
                    templateUrl: "app/Add_Personal/add_personal.html",
                }
            }
            //url: "/Login/:username/:password",
            
        }
        var AllEmpObj = {
            templateUrl: 'app/All_Employees/View_All_Employees.html',
            controller: "view_all_emps_ctrl",
            params: {
                name:'venkataramana'
            }
        }

        var ViewEmpObj = {
            name:"view_personal",
            url: "/view_personal",
            templateUrl: 'app/view_personal/view_personal_dtl_route.html',
            params: {
                name: "",
                email:""
            },
            controller: "view_personal_ctrl"
        }
        var ViewEmp_back_Obj = {
            name: "personal_dtls_back",
            templateUrl: 'app/All_Employees/View_All_Employees.html',
            controller: "view_all_emps_ctrl"

        }
        $stateProvider.state('Login', LoginObj);
        $stateProvider.state('All_Employees', AllEmpObj);
        $stateProvider.state('view_personal', ViewEmpObj);
        $stateProvider.state('personal_dtls_back', ViewEmp_back_Obj);

    }])
    .controller("My_Ctrl", ["$scope", "$state", "$rootScope", "login_svc", "$filter", My_Ctrl])
}
    
)();