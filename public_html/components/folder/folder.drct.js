angular.module('app').directive('folder', function (DialogService ) {
    //folderItem will be the attribute on the tag called folder


    return {
        templateUrl: 'components/folder/folder.tpl.html',
        restrict: 'E',
        scope: {
            "folder": '='
        },
        controller: function ($scope, $attrs, $element) {
            //$scope.folder contains the folder object in the display
            
            
            
             
            $scope.openEditDialog = function (selectedFolderItem)
            {
                
                DialogService.showFolderDialog(selectedFolderItem);
 
            };

 

        }
    };
});