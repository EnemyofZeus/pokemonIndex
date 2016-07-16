angular.module('pokemonApp').controller('mainCtrl', function($scope, mainServ){
  $scope.pokemons;
  $scope.pokemon;

  $scope.gottaCatchEmAll = function(){
    console.log("WHY?!")
    mainServ.gottaCatchEmAll()
    .then(function(res){
      $scope.pokemons=res;
      console.log($scope.pokemons);
    })
  };

  $scope.iChooseYou = function(num){
    mainServ.iChooseYou(num)
    .then(function(res){
      $scope.pokemon = res;
      console.log($scope.pokemon)
    })
  }

});
