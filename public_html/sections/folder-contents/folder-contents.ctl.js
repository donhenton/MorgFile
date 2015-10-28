angular.module('app').controller('FolderContentsController',
        function (DialogService, FolderService, $log, $scope, folderItem) {
            var vm = this;
            vm.folder = folderItem.folder;
            vm.slides = [];
            vm.cards = [];

            for (var i = 0; i < vm.folder.images.pinterestBoards.length; i++)
            {
                var slide = {};
                slide.active = false;
                slide["image"] = vm.folder.images.pinterestBoards[i];
                vm.slides.push(slide);

            }
            
            for (var i = 0; i < vm.folder.images.urls.length; i++)
            {
                var card = {};
                 
                card["src"] = vm.folder.images.urls[i];
                
                vm.cards.push(card);

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
                    
                    vm.refreshBoards();
                }
            });


        });



