TUCS.Ui = angular.module('tucs.ui', []).
factory('FormHelpers', [function() {
		return {
			setDirty:function(form) {
				angular.forEach(form, function(val, key){
					if(!key.match(/\$/)) {
						val.$dirty = true;
					}
				});
				form.$setDirty();
			}
		}
	}]).
filter('v1Date', function($filter) {
	var $date = $filter('date');
	return function(dateParam) {

		if('string' == typeof(dateParam)) {
			dateParam = new V1Date(dateParam);
		}

		return $date(dateParam, 'dd/MM/yyyy');
	}
});