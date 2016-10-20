(function() {
    'use strict';

    angular
        .module('test')
        .config(['$stateProvider', stateProvider])

    function stateProvider($stateProvider) {

        $stateProvider
            .state('base.test', {
                url: '/test',
                views: {
                    'content': {
                        templateUrl: 'app/modules/test/views/test1.html',
                        controller: 'test1Controller'
                    }
                }
            })
            .state('base.test.test2', {
                url: '/test2',
                views: {
                    'content': {
                        templateUrl: 'app/modules/test/views/test2.html',
                        controller: 'test2Controller'
                    }
                }
            })
            .state('base.test.test2.test3', {
                url: '/test3',
                views: {
                    'content': {
                        templateUrl: 'app/modules/test/views/test3.html',
                        controller: 'test3Controller'
                    }
                }
            })
            .state('base.test.test2.test3.test4', {
                url: '/test4',
                views: {
                    'content': {
                        templateUrl: 'app/modules/test/views/test4.html',
                        controller: 'test4Controller'
                    }
                }
            });
    }

})();