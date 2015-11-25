var app = angular.module('app', []);


app.controller('TestCtrl', function ($log,testThing) {
  var vm = this;  
  vm.testThing = testThing;  
  
  vm.testData = 'test100';
});