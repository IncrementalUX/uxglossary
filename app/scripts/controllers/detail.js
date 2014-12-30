'use strict';

/**
 * @ngdoc function
 * @name uxglossaryApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the uxglossaryApp
 */
angular.module('uxglossaryApp')
  .controller('DetailCtrl', ['$scope', '$routeParams', 'DetailFactory',
    function ($scope, $routeParams, DetailFactory) {
      this.message = {};
      var getmessage = DetailFactory.getMessage($routeParams);
      if (getmessage) {
        getmessage.then( angular.bind(this, function (response) {
          DetailFactory.message = response;
          this.message = DetailFactory.message;
        }) );
      }
  }
]);
