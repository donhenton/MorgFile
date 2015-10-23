angular.module('app').directive('imageWidget', function ($log) {

    return {
         
        restrict: 'E',
        scope: {"image": '='},
        compile: function(element,attributes)
        {
            
          
            
            var linkFunction = function($scope, element, attributes) {
                
                var text = "<a href='https://www.pinterest.com/pin/"+
                        
                        $scope.image.id
                        
                        +"' data-pin-do='embedPin'></a>"
                
                element.html(text); 
            
            }

            return linkFunction;
            
            
        }
    };
});