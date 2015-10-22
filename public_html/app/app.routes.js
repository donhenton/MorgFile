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

            .when('/images/:id', {
                templateUrl: 'sections/images/images.tpl.html',
                controller: 'ImagesController',
                controllerAs: 'images',
                resolve: {
                    folder: function (FolderService, $route) {
                        return FolderService.getFolder($route.current.params.id);

                    }

                }
            })

            .when('/browse-images', {
                templateUrl: 'sections/browse-images/browse-images.tpl.html',
                controller: 'BrowseImagesController',
                controllerAs: 'browseImages',
                resolve: {
                    images: function () {
                        
                        return {"data":[{"id":34},{"id":56}]}
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