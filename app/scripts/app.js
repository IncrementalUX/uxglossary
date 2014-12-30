'use strict';

/**
 * @ngdoc overview
 * @name uxglossaryApp
 * @description
 * # uxglossaryApp
 *
 * Main module of the application.
 */
angular
  .module('uxglossaryApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/glossary', {
        templateUrl: 'views/glossary.html',
        controller: 'GlossaryCtrl'
      })
      .when('/glossary/:id', {
        templateUrl: 'views/detail.html',
        controller: 'DetailCtrl',
        controllerAs: 'detail'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
