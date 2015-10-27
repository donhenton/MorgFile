angular.module('app').controller('LoadBoardsController', 
function (DialogService,FolderService,$log) {
    var vm = this;
    vm.folders = FolderService.getFolders();
   // vm.newEntry = {"boardSelections":{},"urlEntries":[]}
   vm.newEntry = {};
   vm.invalidUrl = {"url": ""};
   
   vm.saveUrls = function()
   {
       var entryCopy = {};
       entryCopy["folderSelections"] = vm.newEntry.folderSelections;
       entryCopy["urlEntries"] = vm.newEntry.urlEntries;
       
       entryCopy.urlEntries = entryCopy.urlEntries.split(/[\n\r]+/g);
       entryCopy.urlType="pinerestBoards";
        
       FolderService.writeToFolders(entryCopy)
       //$log.debug(info);
       //{"folderSelections":["1","2","6"],"urlEntries":"http://fred,\nhttp://ned,\nhttp://zed"} 
   }
   
   
   
   
   
});



