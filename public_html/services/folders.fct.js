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
        "saveFolder": saveFolder,
        "writeToFolders": writeToFolders,
        "loadData": loadData


    };
    var idCounter = 6;
    var folderData = [];
    

    function loadData()
    {
        
        var boardData = [
            
            "https://www.pinterest.com/megazoid4500/painting/",
             "https://www.pinterest.com/megazoid4500/space-ships/",
            "https://www.pinterest.com/megazoid4500/inking-study/",
            "https://www.pinterest.com/megazoid4500/character-design/",
            "https://www.pinterest.com/megazoid4500/space-suits/",
            "https://www.pinterest.com/megazoid4500/majipoor/",
            "https://www.pinterest.com/megazoid4500/syd-mead/",
            "https://www.pinterest.com/megazoid4500/robots/",
            "https://www.pinterest.com/megazoid4500/my-work/" 
            
        ];
        
        folderData = [
            {"name": "Sci-fi and space ships", "id": 1, "images": {"urls": [], "pinterestBoards": boardData}},
            {"name": "Fantasy", "id": 2, "images": {"urls": [], "pinterestBoards": boardData}},
            {"name": "Inking Samples", "id": 3, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Anatomy Sample", "id": 4, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Animals and Creature Design", "id": 5, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Character Design", "id": 6, "images": {"urls": [], "pinterestBoards": []}}
        ];

    };
    
    
    
    
    loadData();

    /*
     * add urls to the folder data
     * 
     * urlType: pinterestBoards, urls
     * folderSelection: [ folderid1,folderid2...] the folders to send this urls into
     *  urlEntries: the urls to send in as an array
     * 
     * @param {type} data
     * @returns {undefined}
     */

    function writeToFolders(data)
    {
        $log.debug(angular.toJson(data))
    };

    function createEmptyFolderStructure()
    {
        idCounter = idCounter + 1;
        var newItem = {"name": "", "id": idCounter};
        newItem.images = {};
        newItem.images.google = [];
        newItem.images.pinterestBoards = [];
        newItem.images.flickr = [];

        return newItem;


    }

    function getFolders() {
        return folderData;
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
    function getFolder(id)
    {
        var value = null;
        for (var i = 0; i < folderData.length; i++)
        {
            if (folderData[i].id == id)
            {
                // $log.debug("value "+folderData[i].id+" id "+id +" "+(folderData[i].id == id))
                value = folderData[i];
                break;
            }
        }
        return value;
    }

    return data;


}

