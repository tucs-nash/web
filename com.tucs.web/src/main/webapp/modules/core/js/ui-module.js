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
	}]);