/**
 * Created by aine on 7/4/16.
 */
'use strict';
var controllerId = "IndexController";
var formModule = angular.module("formApp",['ngRoute']);
formModule.config(['$routeProvider',function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:'template/editor.html'
        })
        .when('/editor',{
            templateUrl:'template/editor.html'
        })
        .when('/preview',{
            templateUrl:'template/preview.html'
        })
        
}]);
function indexController($scope){
    $scope.coreData = {
        status:'editor',
        items:[]
    };
    $scope.toggleFormStatus = function(coreData){
        coreData.status = (coreData.status == 'editor')?'preview':'editor';
    };
}
formModule.controller(controllerId,['$scope',indexController]);