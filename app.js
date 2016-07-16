angular.module('pokemonApp', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state("home",{
    url:"/",
    templateUrl:'home.html'
  }).state("pokemon", {
    url:"/pokemon",
    templateUrl:'pokemons.html'
  });
});
