'use strict';

angular
  .module('livezApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/index', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
	  .when('/register', {
        templateUrl: 'views/inscription.html',
        controller: 'InscriptionCtrl'
      })
      .when('/connec', {
        templateUrl: 'views/connexion.html',
        controller: 'ConnexionCtrl'
      })
	  .when('/fav', {
        templateUrl: 'views/favorisBloques.html',
        controller: 'FavorisBloquesCtrl'
      })
      .when('/info', {
        templateUrl: 'views/informationsPersonnelles.html',
        controller: 'InformationsCtrl'
      })
      .when('/inscriptionOk', {
        templateUrl: 'views/inscriptionReussie.html',
        controller: 'InscriptionReussieCtrl'
      })
      .when('/liste', {
        templateUrl: 'views/liste.html',
        controller: 'ListeCtrl'
      })
      .when('/mdpForget', {
        templateUrl: 'views/mdpOublie.html',
        controller: 'MdpOublieCtrl'
      })
      .when('/message', {
        templateUrl: 'views/messagePublic.html',
        controller: 'MessagePublicCtrl'
      })
      .when('/profil', {
        templateUrl: 'views/profilPublic.html',
        controller: 'ProfilCtrl'
      })
     .when('/validation', {
        templateUrl: 'views/validationReussie.html',
        controller: 'ValidationReussieCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
