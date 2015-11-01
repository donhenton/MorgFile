angular.module('app').controller('LoadFoldersController',
        function (DialogService, FolderService, $log, type) {
            var vm = this;
            vm.folders = FolderService.getFolders();
            // vm.newEntry = {"boardSelections":{},"urlEntries":[]}
            vm.newEntry = {};   
            vm.invalidUrl = {"url": ""};
            vm.type = type;
            vm.headerDescription = "Add Image Urls to Folders"
            vm.feedbackMessage = "";
            
            vm.clearMessage = function ()
            {
                vm.feedbackMessage = "";

            }
            

            if (vm.type === 'boards')
            {
                vm.headerDescription = "Add Pinterest Board Urls to Folders"
            }

            vm.saveUrls = function ()
            {
                var entryCopy = {};
                entryCopy["folderSelections"] = vm.newEntry.folderSelections;
                entryCopy["urlEntries"] = vm.newEntry.urlEntries;

                entryCopy.urlEntries = entryCopy.urlEntries.split(/[\n\r]+/g);
                if (vm.type === 'boards')
                {
                    entryCopy.urlType = "pinterestBoards";
                }
                else
                {
                    entryCopy.urlType = "urls";
                }

                FolderService.bulkAddToFolders(entryCopy)
                //$log.debug(info);
                //{"folderSelections":["1","2","6"],"urlEntries":"http://fred,\nhttp://ned,\nhttp://zed"} 
                vm.feedbackMessage = "Changes saved!";
                vm.newEntry = {};
                
            }





        });



