angular
        .module('app.services')

        .factory('FolderService', folderService);



function folderService($log)
{
    var data = {
        "createEmptyFolderStructure": createEmptyFolderStructure,
        "getFolders": getFolders,
        "getFolder": getFolder,
        "removeFolder": removeFolder,
        "saveFolder": saveFolder


    };
    var idCounter = 6;
    var sampleData = [
        {"name": "sci-fi and space ships", "id": 1,"images":{"google":[],"flickr":[],"pinterest":[]} },
        {"name": "Fantasy", "id": 2,"images":{"google":[],"flickr":[],"pinterest":[]} },
        {"name": "Inking Samples", "id": 3,"images":{"google":[],"flickr":[],"pinterest":[]} },
        {"name": "Anatomy Sample", "id": 4,"images":{"google":[],"flickr":[],"pinterest":[]} },
        {"name": "Animals and Creature Design", "id": 5,"images":{"google":[],"flickr":[],"pinterest":[]} },
        {"name": "Character Design", "id": 6,"images":{"google":[],"flickr":[],"pinterest":[]} }
    ];

    function createEmptyFolderStructure()
    {
        idCounter = idCounter + 1;
        var newItem =  {"name": "", "id": idCounter};
        newItem.images = {};
        newItem.images.google = [];
        newItem.images.pinterest = [];
        newItem.images.flickr = [];
        
        return newItem;
        
        
    }

    function getFolders() {
        return sampleData;
    }
    function saveFolder(folder) {
        sampleData.push(folder)
    }
    ;
    function removeFolder(folder)
    {
        angular.forEach(sampleData, function (value, key)
        {
            if (value.id === folder.id)
            {
                // $log.debug("id is "+value.id)
                sampleData.splice(key, 1);

            }
        });
    }
    function getFolder(id)
    {
        var value = null;
        for (var i = 0; i < sampleData.length; i++)
        {
              if (sampleData[i].id == id)
            {
                // $log.debug("value "+sampleData[i].id+" id "+id +" "+(sampleData[i].id == id))
                 value = sampleData[i];
                 break;
             }
        }
        return value;
    }

    return data;


}

