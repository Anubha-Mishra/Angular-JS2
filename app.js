(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {

  }
})();
