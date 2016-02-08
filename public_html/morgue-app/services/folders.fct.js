angular
        .module('app.services')

        .factory('FolderService', folderService);



function folderService($log, $rootScope, $location, $route, localStorageService, $q)
{
    var data = {
        "createEmptyFolderStructure": createEmptyFolderStructure,
        "getFolder": getFolder,
        "removeFolder": removeFolder,
        "saveFolder": saveFolder,
        "bulkAddToFolders": bulkAddToFolders,
        "completeEdit": completeEdit,
        "init": init,
        "getLocalData": getLocalData,
        "getFolders": getFolders,
        "setFullData": setFullData,
        "importCollection": importCollection,
        "saveData": saveData,
        "getCurrentTab": getCurrentTab


    };
    var idCounter = -1;
    var folderData = null;
    var localData = null;
    var LS_KEY = "morguefile_data";
    var LS_TAB_KEY = "morguefile_tab";


    function getCurrentTab()
    {
        var d = localStorageService.get(LS_TAB_KEY);
        if (d === null)
        {
            d = 'Images';
            localStorageService.set(LS_TAB_KEY, d);
        }


        return d;
    }


    //handle a delete request from the Images,Boards,Pins for a delete
    $rootScope.$on('delete-item', function (ev, msg) {
        console.log("delete-item " + msg.type + " " + msg.url + " " + msg.folderIdx + " " + typeof msg.folderIdx);

        //urls,pin-image,pin-board
        var dataSection = null;
        var sectionPointer = null;
        var tabSelector = null;
        // var pathDest = "#/folder-contents/"+msg.folderIdx;
        if (msg.type === 'urls')
        {
            dataSection = folderData[msg.folderIdx - 1].images.urls;
            sectionPointer = "urls";
            tabSelector = "Images";
        }
        if (msg.type === 'pin-image')
        {
            dataSection = folderData[msg.folderIdx - 1].images.pins;
            sectionPointer = "pins";
            tabSelector = "Pins";
        }
        if (msg.type === 'pin-board')
        {
            dataSection = folderData[msg.folderIdx - 1].images.pinterestBoards;
            sectionPointer = "pinterestBoards";
            tabSelector = "Boards";
        }

        var newDataSection =
                angular.element.grep(dataSection, function (value)
                {
                    return value !== msg.url;
                });
        folderData[msg.folderIdx - 1].images[sectionPointer] = newDataSection;
        saveData();
        //console.log("path is "+pathDest)
        //$location.path(pathDest);
        localStorageService.set(LS_TAB_KEY, tabSelector);
        $route.reload();

    });



    function importCollection(collectionAsString)
    {
        var d = angular.fromJson(collectionAsString);
        setFullData(d);
        saveData();

    }

    function saveData()
    {
        angular.forEach(folderData, function (folder, key) {
            //urls,pins,pinterestBoards
            cleanBlanks(folder.images.urls, "urls");
            cleanBlanks(folder.images.pins, "pins");
            cleanBlanks(folder.images.pinterestBoards, "boards");

        });


        return localStorageSave();

    }


    /**
     * TODO return a promise containing data or error
     * upstream expects this pattern
     * @returns {undefined}
     */
    function localStorageSave()
    {

        localStorageService.set(LS_KEY, localData);
        var deferred = $q.defer();
        deferred.resolve({'success': true});
        return deferred.promise;


    }

    function setFullData(d)
    {

        localData = d;
        folderData = d.folderData;
        angular.forEach(folderData, function (value, key) {
            // value.name = value.name + key;
            var idAsInt = parseInt(value.id)
            if (idCounter < idAsInt)
            {
                idCounter = idAsInt;
            }
        });
    }

    function getLocalData()
    {
        init();
        return localData;
    }

    function init()
    {
        if (localData == null)
        {

            var d = localStorageService.get(LS_KEY);
            if (d === null)
            {
                d = {"userId": 1, "folderData": []};
                localStorageService.set(LS_KEY, d);
            }
            setFullData(d);
            var deferred = $q.defer();
            deferred.resolve(localData);
            return deferred.promise;
        } else
        {
            //return a promise whose resolve is 
        }
    }

    function getFolders()
    {
        return folderData;
    }

    /*
     * add urls to the folder data
     * 
     *  urlType: pinterestBoards, urls
     *  folderSelection: [ folderid1,folderid2...] the folders to send this urls into
     *  urlEntries: the urls to send in as an array
     *  bulk load
     * 
     * @param {type} data
     * @returns {undefined}
     */

    function bulkAddToFolders(dataToAdd)
    {
        //images,urls,boards
        for (var i = 0; i < dataToAdd.folderSelections.length; i++)
        {

            var targetFolder = getFolder(dataToAdd.folderSelections[i]);
            if (targetFolder !== null)
            {
                var loadTarget = null;
                if (dataToAdd.urlType === 'boards')
                {

                    loadTarget = targetFolder.images.pinterestBoards;
                }
                if (dataToAdd.urlType === 'images')
                {

                    loadTarget = targetFolder.images.urls;
                }
                if (dataToAdd.urlType === 'pins')
                {

                    loadTarget = targetFolder.images.pins;
                }

                loadTarget.push.apply(loadTarget, dataToAdd.urlEntries);

            }


        }

    }
    ;

    /**
     * 
     *  {"name": "Sci-fi and space ships", "id": 1, "images": {"urls": urlData, "pins": pinData, "pinterestBoards": boardData}},
     * 
     * create an empty folder structure
     * @returns {folderService.createEmptyFolderStructure.newItem}
     */
    function createEmptyFolderStructure()
    {
        idCounter = idCounter + 1;
        var newItem = {"name": "", "id": idCounter};
        newItem.images = {};
        newItem.images.urls = [];
        newItem.images.pinterestBoards = [];
        newItem.images.pins = [];

        return newItem;


    }


    function saveFolder(folder) {
        folderData.push(folder)
    }
    ;
    function removeFolder(folder)
    {
        angular.forEach(folderData, function (value, key)
        {
            if (value.id === folder.id)
            {
                // $log.debug("id is "+value.id)
                folderData.splice(key, 1);

            }
        });
    }
    function getFolder(idAsString)
    {
        var value = null;
        for (var i = 0; i < folderData.length; i++)
        {
            if (folderData[i].id === parseInt(idAsString))
            {
                // $log.debug("value "+folderData[i].id+" id "+id +" "+(folderData[i].id == id))
                value = folderData[i];
                break;
            }
        }
        return value;
    }

    function cleanBlanks(arrayValue, type)
    {
        angular.forEach(arrayValue, function (value, key)
        {
            if (value.trim() === "")
            {
                $log.debug(type + " hit blank at index is " + key + " old len " + arrayValue.length)
                arrayValue.splice(key, 1);

            }
        });

    }

    /**
     * data 
     *     urls comma separated urls list should replace current list
     *     pinterestBoards comma separatged list should replace current list
     *     name folder name
     *     id folder id
     *     
     * @param {type} data
     * @returns {undefined}
     */
    function completeEdit(data)
    {
        var folderIdx = -1;
        for (var i = 0; i < folderData.length; i++)
        {
            if (data.id === folderData[i].id)
            {
                folderIdx = i;
                break;
            }
        }

        if (folderIdx > -1)
        {

            var currentFolder = folderData[i];
            currentFolder.name = data.name;
            currentFolder.images.urls = data.urls;
            currentFolder.images.pinterestBoards = data.pinterestBoards;
            currentFolder.images.pins = data.pinterestPins;

        }



    }

    return data;


}

