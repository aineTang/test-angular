/**
 * Created by aine on 7/5/16.
 */
'use strict';
var controllerId = "EditorController";
function editorController($scope){
    console.log('编辑界面的');
}
angular.module('formApp').controller(controllerId,['$scope',editorController]);