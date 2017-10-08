var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');

  $routeProvider
  //original code
  .when('/user', {
    templateUrl: '/views/user.html',
    controller: 'UserController as uc',
  });
    // .when('/', {
    //   templateUrl: 'index.html'
    // }).when('/user',{
    //     templateUrl: 'views/user.html',
    //     controller: 'UserController',
    //     controllerAs: 'uc'
    // });
});

// myApp.config(function($routeProvider, $locationProvider) {
//   $routeProvider.when('/', {
//       templateUrl: 'views/home.html',
//       controller: 'HomeController',
//       controllerAs: 'hc'
//   }).when('/404', {
//       templateUrl: 'views/404.html',
//       }).when('/rent', {
//       templateUrl: 'views/rent.html',
//       controller: 'RentController as rc'
//   }).when('/sale', {
//       templateUrl: 'views/sale.html',
//       controller: 'SaleController',
//       controllerAs: 'sc'
//   }).otherwise('/404');

  //original code