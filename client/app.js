'use strict';

window.app = angular.module('angularESRI', ['ui.router', 'esri.map','ngCookies',  'ngFileUpload' ]);


app.filter('noUSA', function () {
  return function(str1){
    var idx = str1.indexOf(", USA");
    return str1.slice(0, idx);
  };
});

app.config(function($urlRouterProvider, $stateProvider){
    $stateProvider
        .state('map',{
            url:'/',
            templateUrl: './client/views/map.html',
            controller: 'MapCtrl'
        })

        .state('help',{
            url:'/help/:section',
            templateUrl: './client/views/help.html',
            controller: 'HelpCtrl'
        });

    $urlRouterProvider.otherwise('/');

});