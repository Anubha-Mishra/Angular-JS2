(function (){
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController',ToBuyController)
  .controller('AlreadyBoughtController',AlreadyBoughtController)
  .service('ShoppingListCheckOffService',ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.items = ShoppingListCheckOffService.showItemsToBuy();

    toBuy.bought = function(index) {
      ShoppingListCheckOffService.bought(index);
    };
  }

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.items = ShoppingListCheckOffService.showItemsBought();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyList = [
      {
        name: "Biscuits",
        quantity: "10"
      },
      {
        name: "Cookies",
        quantity: "15"
      },
      {
        name: "Chips",
        quantity: "5"
      },
      {
        name: "Drinks",
        quantity: "10"
      },
      {
        name: "Chocolates",
        quantity: "20"
      }
    ];

    var boughtList =[];

    service.showItemsToBuy = function() {
      return toBuyList;
    };

    service.bought = function(index) {
      boughtList.push(toBuyList[index]);
      toBuyList.splice(index,1);
    };

    service.showItemsBought = function() {
      return boughtList;
    };
  }
})();
