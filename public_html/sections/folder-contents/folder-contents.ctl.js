angular.module('app').controller('FolderContentsController',
        function (DialogService, FolderService, $log, $scope, folderItem) {
            var vm = this;
            vm.folder = folderItem.folder;
            vm.slides = [];

            for (var i = 0; i < vm.folder.images.pinterestBoards.length; i++)
            {
                var slide = {};
                slide.active = false;
                slide["image"] = vm.folder.images.pinterestBoards[i];
                vm.slides.push(slide);

            }

            vm.refreshBoards = function ()
            {
                if (typeof parsePinBtns != 'undefined')
                {
                    //  $log.debug("call parse")
                    parsePinBtns();

                }
            }

            $scope.$on('imagesCompleted', function (ev) {

                 vm.refreshBoards();
            });

            //$watch(a,b)
            // a is what is watched
            // b is the call back which is past current and previous values
            $scope.$watch(function () {
                for (var i = 0; i < vm.slides.length; i++) {
                    if (vm.slides[i].active) {
                        return  vm.slides[i];
                    }
                }
            }, function (currentSlide, previousSlide) {
                if (currentSlide !== previousSlide) {
                    // console.log('currentSlide: '+ angular.toJson(  currentSlide));
                    vm.refreshBoards();
                }
            });


        });



