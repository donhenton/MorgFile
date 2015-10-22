angular.module('app').controller('BrowseImagesController', function ($log, images) {

    var vm = this;
    vm.images = images.data;
    

});