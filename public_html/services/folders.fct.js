angular
        .module('app.services')

        .factory('FolderService', folderService);



function folderService($log )
{
    var data = {
         
        "createEmptyFolderStructure": createEmptyFolderStructure,
        "getFolders": getFolders,
        "removeFolder": removeFolder,
        "saveFolder": saveFolder


    };
    var idCounter = 6;
    var sampleData =  [
        {"name": "sci-fi and space ships", "id": 1},
        {"name": "Fantasy", "id": 2},
        {"name": "Inking Samples", "id": 3},
        {"name": "Anatomy Sample", "id": 4},
        {"name": "Animals and Creature Design", "id": 5},
        {"name": "Character Design", "id": 6} 
    ];

    function createEmptyFolderStructure()
    {
        idCounter = idCounter + 1;
        return {"name": "","id": idCounter};
    }
 
    function getFolders(){ return sampleData;}
    function saveFolder(folder){ sampleData.push(folder)}; 
    function removeFolder(folder)
    {
        angular.forEach(sampleData, function(value,key)
        {
            if (value.id === folder.id)
            {
               // $log.debug("id is "+value.id)
                sampleData.splice(key, 1);
                 
            }
        });
    }
     
    return data;


}

