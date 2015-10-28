angular.module('app').directive('imageWidget', function ($log, $timeout) {

/**
 * create a pinterest board widget
 * @param {type} url
 * @returns {String}
 */
    var createBoardText = function (url)
    {
        var text = "<a href='" + url + "' " + "data-pin-do='embedBoard' \n\
     data-pin-board-width='450' \n\
     data-pin-scale-height='320' \n\
     data-pin-scale-width='50'></a>";

        return text;

    }

/**
 * create a pinterest widget for an image
 * @param {type} id
 * @returns {undefined}
 */
    var createImageText = function (id)
    {
        "<a href='https://www.pinterest.com/pin/" +
                id + "' data-pin-do='embedPin'></a>"


    }

    return {
        restrict: 'E',
        scope: {"image": '=', "type": '@'},
        compile: function (element, attributes)
        {



            var linkFunction = function ($scope, element, attributes) {
               // $log.debug($scope.$parent.$last)
                if ($scope.$parent.$last === true) {
                    $timeout(function () {
                       // $log.debug("send emit")
                        $scope.$emit('imagesCompleted');
                        
                    },20);
                }
                var text = createImageText($scope.image.id);
                if ($scope.type === 'board')
                {
                   
                    text = createBoardText($scope.image);
                    
                }



                element.html(text);

            }

            return linkFunction;


        }
    };
});