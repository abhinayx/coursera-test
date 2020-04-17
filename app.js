(function (){

angular.module('myModule', [])

.controller('myFirstController', function ($scope) {

  var employee ={
    firstName : "Abhinay",
    lastName : "Singh",
    gender: "Male"
  };
  $scope.employee=employee;
  $scope.sayHello= function () {
    return "Hello coursera";
  };
});

})();
