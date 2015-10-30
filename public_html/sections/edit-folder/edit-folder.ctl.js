angular.module('app').controller('EditFolderController',
        function (DialogService, FolderService, $log, $scope, folderItem) {
            var vm = this;
            vm.folder = folderItem.folder;
            vm.newEntry = {};
            vm.invalidUrl = {"url": ""};
            vm.invalidBoard = {"url": ""};
            vm.generalEntryForm = {};
            vm.feedbackMessage = null;


            /**
             * take an array of urls and return a string
             * with a carriage return at the end of an array item
             *  
             * 
             * @param {type} arrayOfUrls
             * @returns {undefined}
             */
            function toDataDisplay(arrayOfUrls)
            {
                
                var returnString =  ""
                for (var i=0;i<arrayOfUrls.length;i++)
                {
                    returnString = returnString +arrayOfUrls[i]+"\n";
                }
                return returnString;
            }

            /**
             * take carriage return items and 
             * returns an array suitable for saving
             * 
             * @param {type} items
             * @returns {undefined}
             */
            function fromDataDisplay(items)
            {
                items = items + "";
                var urlArray = items.split(/[\n]/g);
                return urlArray;
            }
//editFolder.generalEntryForm.$invalid


            vm.newEntry.urls = toDataDisplay(vm.folder.images.urls);
            vm.newEntry.pinterestBoards = toDataDisplay(vm.folder.images.pinterestBoards);
            vm.newEntry.name = vm.folder.name;
            vm.newEntry.id = vm.folder.id;

            vm.clearMessage = function()
            {
                vm.feedbackMessage = null;
                
            }

            vm.saveChanges = function ()
            {
                // $log.debug(vm.generalEntryForm.$invalid)  
                var saveData = {};

                saveData.urls = fromDataDisplay(vm.newEntry.urls);
                saveData.pinterestBoards = fromDataDisplay(vm.newEntry.pinterestBoards);
                saveData.name = vm.folder.name;
                saveData.id = vm.folder.id;
                FolderService.completeEdit(saveData);
                vm.feedbackMessage = "Changes saved!"

            }

            /**
             * conditional for allowing form submit button
             * @returns {Boolean}
             */
            vm.formDisabled = function ()
            {

                return true;
            }


        });



