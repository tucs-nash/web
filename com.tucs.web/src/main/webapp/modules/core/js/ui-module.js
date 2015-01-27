TUCS.Ui = angular.module('tucs.ui', []).
factory('CoreService', [function() {
		return {
			setDirty:function(form) {
				angular.forEach(form, function(val, key){
					if(!key.match(/\$/)) {
						val.$dirty = true;
					}
				});
				form.$setDirty();
			},
			setControl: function(control) {
				localStorage.setItem('control', control);
			},
			getControl: function() {
				return localStorage.getItem('control');
			},
			hasControl: function() {
				return localStorage.getItem('control') != null;
			}
		}
	}]).
filter('tcDate', function($filter) {
	var $date = $filter('date');
	return function(dateParam) {

		if('string' == typeof(dateParam)) {
			dateParam = new TCDate(dateParam);
		}

		return $date(dateParam, 'dd/MM/yyyy');
	}
}).
filter('tcDateTime', function($filter) {
	var $date = $filter('date');
	return function(dateParam) {

		if('string' == typeof(dateParam)) {
			dateParam = new TCDate(dateParam);
		}

		return $date(dateParam, 'dd/MM/yyyy HH:mm:ss');
	}
});