/**
 * Created by aine on 7/5/16.
 */
'use strict';
var controllerId = "DialogController";

function dialogController($scope){
    $scope.selectedType = "";

    $scope.selectRadio = function (selectedType){
        if (selectedType){
            var item = {
                type:selectedType
            };
            $scope.addItem(item);
        }
        else{
            alert("請添加選擇元素");
        }
    }
}

angular.module('formApp')
    .controller(controllerId,['$scope',dialogController]);