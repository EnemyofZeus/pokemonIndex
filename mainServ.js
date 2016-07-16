angular.module('pokemonApp').service('mainServ', function($http){
  this.gottaCatchEmAll= function(){
    return $http({
    method:"GET",
    url: "http://pokeapi.co/api/v2/pokemon"
  }).then(function(res){
    return res.data.results
  });
}
  this.iChooseYou = function(num){
    return $http({
      method:"GET",
      url: "http://pokeapi.co/api/v2/pokemon/"+num
    }).then(function(res){
      return res.data
    })
  }
})
