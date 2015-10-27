angular.module('app').directive('urlChecker', function ($log, $timeout) {


    var isUrlOkay = function (url)
    {
        var regex = new RegExp("(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})");
        
         
        return url.match(regex);

    }

    return {
        restrict: 'A',
        
        scope: {
             urlChecker: "="
        },
        require: 'ngModel',
        
        //https://gist.github.com/CMCDragonkai/6282750
        
        link: function (scope, element, attrs, $ctrl ) {
            $ctrl.$validators.urlChecker = function (modelValue ) {
              
                if (modelValue !== undefined) {
                    
                    var urls = modelValue.split(/[\n]/g);
                    var currentUrl ;
                  
                    for (var i = 0; i < urls.length; i++)
                    {
                        
                        currentUrl = urls[i]
                        if (!isUrlOkay(urls[i]))
                        {
                         
                            scope.urlChecker.url = urls[i];
                            return false;
                        }
                    }
                  
                    return true;


                }
                return false;
            }
            
        }
    };














});