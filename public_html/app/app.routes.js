angular
        .module('app.routes', ['ngRoute'])
        .config(routes);

function routes($routeProvider) {
    $routeProvider.
            when('/', {
                templateUrl: 'sections/main/main.tpl.html',
                controller: 'MainController',
                controllerAs: 'main'
            })

            .when('/pinterest-boards', {
                templateUrl: 'sections/pinterest-boards/pinterest-boards.tpl.html',
                controller: 'PinterestBoardsController',
                controllerAs: 'pinterestBoards',
                resolve: {
                    boardListing: function (BoardsService, $route) {
                        return BoardsService.getBoards($route.current.params.id);

                    }

                }
            })

            .when('/browse-images/:id', {
                templateUrl: 'sections/browse-images/browse-images.tpl.html',
                controller: 'BrowseImagesController',
                controllerAs: 'browseImages',
                resolve: {
                    images: function (FolderService,$route) {

                        return {
                                "folder": FolderService.getFolder($route.current.params.id),
                            
                                "data":
                                    [{
                                            "url": "https://www.pinterest.com/pin/326792516690556201/",
                                            "note": "Achilles Battle Cruiser wip2 by ulyses",
                                            "link": "https://www.pinterest.com/r/pin/326792516690556201/4792435186832770885/286c64d72f1f8df4a175bd2222381f2de0e94052467adc88cce80a728b24ee44",
                                            "id": "326792516690556201"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690350788/",
                                            "note": "Astro Empires - Free MMO Space Strategy Browser Game",
                                            "link": "https://www.pinterest.com/r/pin/326792516690350788/4792435186832770885/630a65a7e2b3bf28c98b5aeacf50d8b196f53706e4a242b0e31f1303374311f8",
                                            "id": "326792516690350788"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690328280/",
                                            "note": "Deck C, Stefan Morrell on ArtStation at http://www.artstation.com/artwork/deck-c",
                                            "link": "https://www.pinterest.com/r/pin/326792516690328280/4792435186832770885/da98c81d2edc87f952cc8f772c573ba286faec149d96788b4d57ac889a683837",
                                            "id": "326792516690328280"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690276312/",
                                            "note": "Jeff Borck´s Bombshell Bonneville 1952 Buick Straight Eight",
                                            "link": "",
                                            "id": "326792516690276312"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690270493/",
                                            "note": "http://all-images.net/",
                                            "link": "https://www.pinterest.com/r/pin/326792516690270493/4792435186832770885/bb9f2b07d191843799252361363184bafd05174683acb36bdae8eca4b83fdea7",
                                            "id": "326792516690270493"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690265607/",
                                            "note": " ",
                                            "link": "",
                                            "id": "326792516690265607"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690204703/",
                                            "note": "Asymetrical Cutter by Survivalartist | Flickr - Photo Sharing!",
                                            "link": "https://www.pinterest.com/r/pin/326792516690204703/4792435186832770885/868ae4b81327837c896b944b63ccd31274b7bddb273188dd478a50255ac3d81a",
                                            "id": "326792516690204703"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690204697/",
                                            "note": "Heavy Ion Cruiser Stager by KaranaK on DeviantArt",
                                            "link": "https://www.pinterest.com/r/pin/326792516690204697/4792435186832770885/650608b146109f549c728eb0e4b7e947ae469654444fb4fa2bfef02e60e951e1",
                                            "id": "326792516690204697"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690062271/",
                                            "note": "Spaceship",
                                            "link": "https://www.pinterest.com/r/pin/326792516690062271/4792435186832770885/fa517222b90dd92414453731f8000be755b80f492cefe3d0ea0c50a88db5efd2",
                                            "id": "326792516690062271"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516690030757/",
                                            "note": "Astro Empires - Gratis MMO Browserbaseret Rumstrategispil",
                                            "link": "https://www.pinterest.com/r/pin/326792516690030757/4792435186832770885/33fbf0aba424011769ba18a9c728e808dea09284f412f4e9339ef008c6c7bea5",
                                            "id": "326792516690030757"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689971375/",
                                            "note": "Xiphias, Steve Wang on ArtStation at https://www.artstation.com/artwork/xiphias",
                                            "link": "https://www.pinterest.com/r/pin/326792516689971375/4792435186832770885/e1b771087fb8e4313e4a75c7df26aca6bd0902ab9e8da23f927455bd05c39e1b",
                                            "id": "326792516689971375"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689864213/",
                                            "note": "Pirates of the Asteroids!!!",
                                            "link": "https://www.pinterest.com/r/pin/326792516689864213/4792435186832770885/49c68b5deb0466931fa47179f86a3aa14d49a470392394a9bb358c5ef52926b0",
                                            "id": "326792516689864213"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689864133/",
                                            "note": "Plan59 :: 1950s Space Art :: Frank Tinsley :: Mars Snooper  ****Nathan Walsh's Dark Science Fiction Novel \"Pursuit of the Zodiacs.\" Launching Soon! PursuitoftheZodiacs.com****",
                                            "link": "https://www.pinterest.com/r/pin/326792516689864133/4792435186832770885/d07dc9bb2f71f2f538b10af7f470c9b52c7e066b3d2a976bee6063c1958e420a",
                                            "id": "326792516689864133"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689806885/",
                                            "note": "Concept ship- Leviathan capital ship (http://galacticstargateauthority.wikia.com/wiki/Leviathan) #spaceship #starship",
                                            "link": "",
                                            "id": "326792516689806885"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689805283/",
                                            "note": "ff28",
                                            "link": "https://www.pinterest.com/r/pin/326792516689805283/4792435186832770885/ebbef376a5ae4f416981a31fee1d3c64a2502fb78708f447c88c5cad0a9e3686",
                                            "id": "326792516689805283"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689803867/",
                                            "note": "Jim Martin Concept Art",
                                            "link": "https://www.pinterest.com/r/pin/326792516689803867/4792435186832770885/911acd3e24342400e733c0b2c03f85554c8a8f3be2ba61eae07ad0c088f0e5d5",
                                            "id": "326792516689803867"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689780417/",
                                            "note": "Sci Fi Corridor",
                                            "link": "",
                                            "id": "326792516689780417"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689780415/",
                                            "note": "sci fi spaceship corridor",
                                            "link": "https://www.pinterest.com/r/pin/326792516689780415/4792435186832770885/f656bbebbd0eaaaa66d3eedc23fff723c4725bed263392f90017ab64bceb5561",
                                            "id": "326792516689780415"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689780343/",
                                            "note": "★ || CHARACTER DESIGN REFERENCES (www.facebook.com/CharacterDesignReferences & pinterest.com/characterdesigh) • Do you love Character Design? Join the Character Design Challenge! (link→ www.facebook.com/groups/CharacterDesignChallenge) Share your unique vision of a theme every month, promote your art, learn and make new friends in a community of over 16.000 artists who share your same passion! || ★",
                                            "link": "https://www.pinterest.com/r/pin/326792516689780343/4792435186832770885/2cfde811ca944193cb45d22462e0b87063a930fc452c486f1c0f5e8f5f3d7ce2",
                                            "id": "326792516689780343"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689740953/",
                                            "note": "http://all-images.net/fond-ecran-gratuit-hd-science-fiction59/ Check more at http://all-images.net/fond-ecran-gratuit-hd-science-fiction59/",
                                            "link": "",
                                            "id": "326792516689740953"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689736853/",
                                            "note": " ",
                                            "link": "https://www.pinterest.com/r/pin/326792516689736853/4792435186832770885/31a255230783f37d492a60f35d0b0bc3d1ace72bc935e0fb6bb8994a0d7bebb9",
                                            "id": "326792516689736853"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689667943/",
                                            "note": "cypulchre:  iRON by KuldarLeement",
                                            "link": "https://www.pinterest.com/r/pin/326792516689667943/4792435186832770885/258a616ede3f505d0cff88ebd6015b2ad7c4a73c83cbff2a4ffe6a368f4d2358",
                                            "id": "326792516689667943"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689660906/",
                                            "note": "peek_of_the_week_40.jpg (1920×1080)",
                                            "link": "https://www.pinterest.com/r/pin/326792516689660906/4792435186832770885/03bcebf6fc34452ed577957935e2285a4993e1d4c9f61d0d05bc604729540291",
                                            "id": "326792516689660906"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689652418/",
                                            "note": "sci-fi art",
                                            "link": "https://www.pinterest.com/r/pin/326792516689652418/4792435186832770885/6db262f2cf1ae4b1c5123e367b104252f2a814726bc655ef2930298f016b2ed1",
                                            "id": "326792516689652418"
                                        }, {
                                            "url": "https://www.pinterest.com/pin/326792516689648998/",
                                            "note": "Lewis & Clark from \"Event Horizon\"",
                                            "link": "",
                                            "id": "326792516689648998"
                                        }]

                        }//end object to return
                    }




                }
            })



            /*
             .when('/my-shows', {
             templateUrl: 'sections/my-shows/my-shows.tpl.html',
             controller: 'MyShowsController',
             controllerAs: 'myShows'
             })
             .when('/search', {
             templateUrl: 'sections/search/search.tpl.html',
             controller: 'SearchController',
             controllerAs: 'search'
             })
             
             */
            .otherwise({
                redirectTo: '/'
            });
}