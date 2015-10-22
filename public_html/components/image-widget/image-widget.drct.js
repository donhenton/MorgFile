angular.module('app').directive('imageWidget', function ($log) {

    return {
        templateUrl: 'components/image-widget/image-widget.tpl.html',
        restrict: 'E',
        scope: {"image": '='},
        compile: function(element,attributes)
        {
            
            //do one time only stuff here
           // element.css("border", "1px solid #cccccc");
            
            var linkFunction = function($scope, element, attributes) {
                
                var text = "<a href='https://www.pinterest.com/pin/99360735500167749' data-pin-do='embedPin'></a>"
                
                element.html(text); 
                        //+ $scope.image.id);
               // element.css("background-color", "#ffff00");
            }

            return linkFunction;
            
            
        }
    };
});