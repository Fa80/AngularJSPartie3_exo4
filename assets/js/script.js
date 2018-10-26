// notre objet testApp est un module de 'app'
var testApp = angular.module('app',[]);
// on cré un controller testCtrl
testApp.controller('testCtrl', function($scope){
  $scope.pi = 3.14159265359;
});
