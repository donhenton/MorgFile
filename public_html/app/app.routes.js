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
            .when('/show/:id', {
                templateUrl: 'sections/show/show.tpl.html',
                controller: 'ShowController',
                controllerAs: 'show',
                resolve: {
                    data: function (StoreFactory, $route) {
                        return StoreFactory.getShow($route.current.params.id);
                    },
                    seasons: function (ShowService, $route) {
                        return ShowService.get($route.current.params.id).then(function (response) {
                            return response.seasons;
                        })
                    }
                }
            })
            */
            .otherwise({
                redirectTo: '/'
            });
}