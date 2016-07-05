/**
 * Created by aine on 7/5/16.
 */
'use strict';
var controllerId = "DialogController";

function dialogController($scope){
    $scope.selecteRadio = function (selectedType){
        var item = {
            type:selectedType
        };
        $scope.addItem(item);
    }
}

angular.module('formApp')
    .controller(controllerId,['$scope',dialogController]);