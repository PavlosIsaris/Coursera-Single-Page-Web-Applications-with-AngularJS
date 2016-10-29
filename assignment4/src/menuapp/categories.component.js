(function () {
'use strict';

angular.module('data')
.component('categoriesData', {
  templateUrl: 'src/shoppinglist/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
