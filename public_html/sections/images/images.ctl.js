angular.module('app').controller('ImagesController', function (folder, DialogService, FolderService, $log) {

    var vm = this;
    vm.folderName = folder.name;
    $log.debug(vm.folderName)

});