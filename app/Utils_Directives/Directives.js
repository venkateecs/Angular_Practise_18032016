
/// <reference path="../../bower_components/angular/angular.min.js" />
(
    function () {

        function hrmsRequired() {
            return {
                require: 'ngModel',
                restrict: 'A',
                link: function (scope, element, attr, ctrl) {
                    ctrl.$parsers.unshift(check);
                    function check(data) {                       
                        if (data.length == 0) {
                            ctrl.$setValidity("hrrequired", false);
                        }
                        else {
                            ctrl.$setValidity("hrrequired", true);
                        }

                        for (var i = 0; i <= data.length; i++) {
                            //alert(isNaN(data[i]));
                            var check_cnd = isNaN(data[i]);                            
                            if (check_cnd == false) {
                                ctrl.$setValidity("hrcheckno", false);
                                break;
                            }
                            else {
                                ctrl.$setValidity("hrcheckno", true);
                            }
                            /*if (isNaN(data[i])) {
                                ctrl.$setValidity("hrcheckno", true);
                            }
                            else {
                                ctrl.$setValidity("hrcheckno", false);
                            }*/


                        }

                       

                        return data;
                    }
                }
            }
        }

        function header() {
            return {
                restrict: "A",
                scope: {
                    headertitle: "@",
                    add:"&"
                },
                templateUrl: 'app/Utils_Directives/header_directive.html'
            }
        }
        
        function empdetails() {
            return {
                restrict: "A",
                scope:{
                    details: "="                    
                },
                templateUrl: 'app/Utils_Directives/Directives_Show_Personal_Dtls.html'
            }
        }

        angular.module('Components', [])
        .directive('hrmsRequired', [hrmsRequired])
        .directive('header', [header])
        .directive("empdetails", [empdetails])
    }
)();