/**
 * Created by aine on 7/5/16.
 */
'use strict';
var controllerId = "EditorController";
function editorController($scope,lodashFactory){
    /**
     * 移除一个表单元素
     * 使用lodash实现
     */
    $scope.removeItem = function (itemIndex){
        $scope.coreData.items = lodashFactory.filter($scope.coreData.items,function (item,index){
            return index != itemIndex;
        });
    };
    $scope.dialog = {
        isShowDialog:false
    };
    $scope.addItem = function(item){
        $scope.coreData.items.push(item);
        $scope.operateDialog(false);
        console.log("添加元素成功")
    };
    $scope.operateDialog = function(boo){
        $scope.dialog.isShowDialog = boo;
    }
}
angular.module('formApp')
    .controller(controllerId,['$scope','LodashFactory',editorController]);