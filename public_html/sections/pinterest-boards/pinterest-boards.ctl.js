angular.module('app').controller('PinterestBoardsController', 
function (DialogService,FolderService,$log) {
    var vm = this;
    vm.folders = FolderService.getFolders();
   // vm.newEntry = {"boardSelections":{},"urlEntries":[]}
   vm.newEntry = {};
   vm.invalidUrl = {"url": "fred"};
   
   vm.saveUrls = function()
   {
      
       cleanup(vm.newEntry);
        var info = angular.toJson(vm.newEntry);
       $log.debug(info);
       //{"folderSelections":["1","2","6"],"urlEntries":"http://fred,\nhttp://ned,\nhttp://zed"} 
   }
   
   
   
   
   
});



