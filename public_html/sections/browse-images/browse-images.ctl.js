angular.module('app').controller('BrowseImagesController', function ($log, images) {

    var vm = this;
    vm.images = images.data;
    vm.maxImages = 4;
    vm.imageBuffer = new Array(vm.maxImages);
    vm.currentPage = 1;
    vm.totalImages = images.data.length;
    // console.log(images.length)

    vm.pageChanged = function ()
    {
        
         
        for (var i = 0; i < vm.maxImages; i++)
        {
            vm.imageBuffer[i] = null;
        }
        var maxLoop = 0;
        if (vm.totalImages < vm.maxImages)
        {
            maxLoop = vm.totalImages;
        }
        else
        {
            maxLoop = vm.maxImages;
        }
        var start = (vm.currentPage - 1) * vm.maxImages;
        
        for (var i = start; i < start + maxLoop; i++)
        {
            if (i < vm.images.length)
            {
                vm.imageBuffer[i-start] = vm.images[i];
            }
        }

    }
    vm.pageChanged();
});