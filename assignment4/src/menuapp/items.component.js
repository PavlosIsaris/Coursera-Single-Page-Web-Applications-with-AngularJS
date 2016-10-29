(function () {
'use strict';

angular.module('data')
.component('itemsData', {
  templateUrl: 'src/shoppinglist/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
