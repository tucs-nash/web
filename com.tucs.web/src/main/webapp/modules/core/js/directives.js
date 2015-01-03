TUCS.App.directive('numberConverter', function() {
  return {
    priority: 1,
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attr, ngModel) {
      function toModel(value) {
        return "" + value; // convert to string
      }

      function toView(value) {
        return parseInt(value); // convert to number
      }

      ngModel.$formatters.push(toView);
      ngModel.$parsers.push(toModel);
    }
  };
});