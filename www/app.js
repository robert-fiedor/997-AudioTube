'use strict';

angular.module('myApp', ['ionic']);


angular.module('myApp').directive('entryFieldDirective', [
     function () {
        return {
            restrict: 'E',
            templateUrl: 'js/entry-field/my-customer.html',
            link: function (scope) {
               console.log(123);

                scope.lala=1;

            }
        };
    }
]);

function HomeCtrl($scope, $timeout, $ionicModal, $ionicActionSheet) {
}

angular
    .module('myApp')
    .controller('HomeCtrl', HomeCtrl);
