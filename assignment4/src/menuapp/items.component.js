(function () {
'use strict';

angular.module('data')
.component('itemsData', {
  templateUrl: 'src/menuapp/templates/items.template.html',
  bindings: {
    items: '<'
  }
});

})();
