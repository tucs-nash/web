TUCS.Localisation = angular.module('tucs.localisation', [])
	.factory('LocalisationService', ['$http', function ($http) {
		var contentLoaded;
		var pageContent = [];
		var locationService = {
			translateContentKey: function (contentKey, params) {

				if (V1.Global.contentStrings != null) {
//                    var result = pageContent[contentKey];
					var result = V1.Global.contentStrings[contentKey];

					if(params && result) {
						for(i in params) {
							result = result.replace("%" + i + "%", params[i]);
						}
					}

					return result;
				}

			}
		}
		return locationService;

	}
	])
	.filter('i18n', ["LocalisationService",
		function (LocalisationService) {
			return function (contentKey, params) {
				return LocalisationService.translateContentKey(contentKey, params) ||contentKey;
			}

		}
	])