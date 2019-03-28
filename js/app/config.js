'use strict';
 
 app
  .config(function($routeProvider,$locationProvider){
  $locationProvider.html5Mode({ enabled:true })
  $routeProvider
    .when("/", {
      templateUrl: 'views/home.html',
    }) 
    .when("/menu", {
      templateUrl: 'views/menu.html',
    }) 
    .when("/profile", {
      templateUrl: 'views/profile.html',
    }) 
    .when("/404",{
      templateUrl: 'views/notfound.html',
    })
    .when("/403",{
      templateUrl: 'views/denied.html',
    })
    .otherwise({
      redirectTo: '/404'
    })
  })