(function () {
'use strict';

angular.module('data')
.component('categoriesData', {
  templateUrl: 'src/menuapp/templates/categories.template.html',
  bindings: {
    categories: '<'
  }
});

})();
