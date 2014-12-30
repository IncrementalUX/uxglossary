'use strict';
/*global Firebase */
/**
 * @ngdoc function
 * @name uxglossaryApp.controller:GlossaryCtrl
 * @description
 * # GlossaryCtrl
 * Controller of the uxglossaryApp
 */
angular.module('uxglossaryApp')
  .controller('GlossaryCtrl', ['$scope', '$firebase',
    function ($scope, $firebase) {
      var ref = new Firebase('https://uxglossary.firebaseio.com/');
      $scope.glossaryItems = $firebase(ref).$asArray();
  }
]);
