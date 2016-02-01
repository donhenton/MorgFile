angular.module('app')

        .controller('ExportController', function ($log, FolderService) {
            var vm = this;

            vm.message = "";
            var baseMessageClass = "emphasis pull-right";
            var localData = FolderService.getLocalData();
            vm.data = angular.toJson(angular.copy(localData), true);
            

            vm.saveData = function ()
            { 
               var parsed = null;
               
               try {
                   parsed   = angular.fromJson(vm.data);
                   vm.messageClasses = baseMessageClass + " text-success";
                   vm.message = "Successfully Imported";
                   FolderService.importCollection(vm.data);
               }
               catch (e)
               {
                   vm.messageClasses = baseMessageClass + " text-danger important";
                   vm.message = "PARSE ERROR: '"+e.message+"'";
                   console.log(e.message);
               }
               
                
            };

        });

