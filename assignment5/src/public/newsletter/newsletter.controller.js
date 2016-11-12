(function () {
"use strict";

angular.module('public')
.controller('NewsLetterController', NewsLetterController);

function NewsLetterController() {
  var $ctrl = this;
  $ctrl.submit = function () {
    $ctrl.completed = true;
  };
}


})();
