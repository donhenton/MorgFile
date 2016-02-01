angular.module('app')

        .controller('ExportController', function ($log, FolderService ) {
            var vm = this;
            
            vm.message = "";
            var baseMessageClass = "emphasis pull-right";   
            vm.data = angular.toJson({},true);
            vm.messageClasses = baseMessageClass + " text-success";
            
            vm.saveData = function()
            {
                // ImpostersService.importCollection(vm.collectionJSON);
                 vm.message = "Successfully Imported";
            };

        });

