(function() {

    'use strict';

    angular
        .module('test')
        .controller('test1Controller', function($scope){
            $scope.name = 'priti';
        })
        .controller('test2Controller', function($scope){
            $scope.lname = 'gupta';
        })
        .controller('test3Controller', function($scope){
            $scope.age = 25;
        })
        .controller('test4Controller', function($scope){
            $scope.hobby = 'music';
        });

    

})();