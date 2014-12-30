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
  .controller('GlossaryCtrl', ['$scope', '$firebase', '$location',
    function ($scope, $firebase, $location) {

      var ref = new Firebase('https://uxglossary.firebaseio.com/');
      $scope.glossaryItems = $firebase(ref).$asArray();

      $scope.goToItem = function (id) {
        console.log('glossary/' + id);
        $location.path('glossary/' + id);
      };

  }
]);
