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

        var urlData = ["http://orig14.deviantart.net/1837/f/2015/283/5/1/sample_panel_by_megazoid-d9cnv65.jpg",
            "http://orig08.deviantart.net/c96a/f/2015/001/a/2/ship1003_by_megazoid-d8c6rli.jpg",
            "http://orig00.deviantart.net/c15b/f/2014/293/7/a/lynch_by_megazoid-d83lizs.jpg",
            "http://orig00.deviantart.net/595d/f/2015/071/e/c/black_and_white_illustration_practice_by_megazoid-d8lgwhv.jpg",
            "http://orig05.deviantart.net/0ee6/f/2015/232/f/b/port11final_by_megazoid-d96ifls.jpg",
            "http://orig07.deviantart.net/8ad8/f/2015/033/5/a/stand102_by_megazoid-d8ghaa9.jpg",
            "http://orig00.deviantart.net/e4e4/f/2014/357/b/9/technician_by_megazoid-d8axnyn.jpg",
            "http://orig00.deviantart.net/7d0c/f/2015/161/c/2/n16_by_userthiago-d8wsz16.png",
            "http://orig10.deviantart.net/899e/f/2015/282/0/0/n47__by_userthiago-d9cjffy.png",
            "http://orig14.deviantart.net/e806/f/2015/106/d/f/n45__by_userthiago-d8pyt4x.png"];

        folderData = [
            {"name": "Sci-fi and space ships", "id": 1, "images": {"urls": urlData, "pinterestBoards": boardData}},
            {"name": "Fantasy", "id": 2, "images": {"urls": urlData, "pinterestBoards": boardData}},
            {"name": "Inking Samples", "id": 3, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Anatomy Sample", "id": 4, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Animals and Creature Design", "id": 5, "images": {"urls": [], "pinterestBoards": []}},
            {"name": "Character Design", "id": 6, "images": {"urls": [], "pinterestBoards": []}}
        ];

    }
    ;




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
    }
    ;

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

