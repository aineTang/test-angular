/**
 * Created by aine on 7/5/16.
 */
var factoryId = "LodashFactory";

function lodashFactory($window){
    return $window._;
}
angular.module('formApp')
    .factory(factoryId,['$window',lodashFactory]);
