/**
 * Created by aine on 7/5/16.
 */
'use strict';

var controllerId = "PreviewController";

function previewController($scope){
    console.log('预览界面的');
}

angular.module('formApp')
    .controller(controllerId,['$scope',previewController]);