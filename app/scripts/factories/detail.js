angular.module('uxglossaryApp')
  .factory('DetailFactory', ['$q', '$http', '$routeParams',
    function DetailFactory ($q, $http, $routeParams) {
      'use strict';
      var exports = {};

      exports.id = $routeParams.id;

      exports.getMessage = function (params) {
        if (params.id) {
          var deferred = $q.defer();
          $http.get('https://uxglossary.firebaseio.com/details/'+ params.id +'.json')
            .success(function (data) {
              deferred.resolve(data);
            })
            .error(function (data) {
              deferred.reject(data);
            });
            return deferred.promise;
        }
      };
      return exports;
    }
  ]);