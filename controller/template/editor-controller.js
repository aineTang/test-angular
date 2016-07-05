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
    /*初始化变量：控制选择弹出框的显示隐藏*/
    $scope.dialog = {
        isShowDialog:false
    };
    /**
     * 增添一个表单元素
     * @param item
     */
    $scope.addItem = function(item){
        $scope.coreData.items.push(item);
        $scope.operateDialog(false);
        console.log("添加元素成功")
    };
    /**
     * 控制选择弹出框的显示隐藏
     * @param boo
     */
    $scope.operateDialog = function(boo){
        $scope.dialog.isShowDialog = boo;
    };
    /*获取配置的弹出框模板地址*/
    $scope.dialogTemplate = FORM.dialogTemplate;
}
angular.module('formApp')
    .controller(controllerId,['$scope','LodashFactory',editorController]);