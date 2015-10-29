angular.module('app').controller('EditFolderController',
        function (DialogService, FolderService, $log, $scope, folderItem) {
            var vm = this;
            vm.folder = folderItem.folder;
            vm.newEntry = {};
            vm.invalidUrl = {"url": ""};
            vm.invalidBoard = {"url": ""};
            

            /**
             * take comma separated items and return the items
             * split and marked with a carriage return
             * 
             * @param {type} arrayItems
             * @returns {undefined}
             */
            function toDataDisplay(items)
            {
                var returnString = "";
                items = items + "";
                var itemsArray = items.split(',');
                for (var i = 0; i < itemsArray.length; i++)
                {

                    returnString = returnString + itemsArray[i] + "\n";

                }

                return returnString;
            }

            /**
             * take carriage return items and 
             * replace carriage return with a comma
             * 
             * @param {type} arrayItems
             * @returns {undefined}
             */
            function fromDataDisplay(items)
            {
                var returnString = "";
                items = items + "";
                var itemsArray = items.split(/[\n\r]+/g)
                for (var i = 0; i < itemsArray.length; i++)
                {

                    returnString = returnString + itemsArray[i] + ",";

                }

                return returnString;
            }


            vm.newEntry.urls = toDataDisplay(vm.folder.images.urls);
            vm.newEntry.pinterestBoards = toDataDisplay(vm.folder.images.pinterestBoards);
            vm.newEntry.name = vm.folder.name;

            vm.saveChanges = function ()
            {
                   
                 //  FolderService.completeEdit(vm.folder.id,vm.newEntry);

            }




        });



