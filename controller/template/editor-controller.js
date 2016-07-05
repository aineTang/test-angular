/**
 * Created by aine on 7/5/16.
 */
'use strict';
var controllerId = "EditorController";
function editorController($scope,lodashFactory){
    $scope.removeItem = function (itemIndex){
        /**
         * 移除一个表单元素
         * 使用lodash实现
         */
        $scope.coreData.items = lodashFactory.filter($scope.coreData.items,function (item,index){
            return index != itemIndex;
        });
    }
}
angular.module('formApp').controller(controllerId,['$scope','LodashFactory',editorController]);