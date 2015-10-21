angular
        .module('app.services')
        .factory('DialogService', dialogService);



function dialogService($uibModal)
{
    var data = {
        "showFolderDialog": showFolderDialog



    };
 

    function showFolderDialog(selectedFolderItem)
    {
        //console.log(selectedFolderItem);
        var res = null;
        var modalInstance =
                $uibModal.open({
                    templateUrl: 'sections/dialogs/editfolder.tpl.html',
                    controller: 'EditFolderCtrl',
                    size: 'lg',
                    resolve: {
                        folder: function () {
                            return selectedFolderItem;
                        }
                    }
                });
       
        
        return modalInstance.result;

    }

    return data;


}

