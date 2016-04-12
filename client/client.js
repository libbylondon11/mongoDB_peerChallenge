var app = angular.module('appAssign', []);
app.controller("MainController", ['$scope', '$http', function($scope, $http){
   $scope.assignment = {};
   $scope.assignments = [];
   var fetchAssignments = function() {
       return $http.get('/assignments').then(function(response){
           if(response.status !== 200){
               throw new Error('Failed to fetch assignments from the API');
           }
           $scope.assignment = {};
           $scope.assignments = response.data;
           return response.data;
       })
   };
   $scope.add = function(assignment){
       return $http.post('/assignments', assignment).then(fetchAssignments());
   };
   fetchAssignments();
}]);
