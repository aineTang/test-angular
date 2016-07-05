/**
 * Created by aine on 7/4/16.
 */
'use strict';
var controllerId = "IndexController";
var formModule = angular.module("formApp",['ngRoute']);
formModule.config(['$routeProvider',function ($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl:FORM.editorTemplate
        })
        .when('/editor',{
            templateUrl:FORM.editorTemplate
        })
        .when('/preview',{
            templateUrl:FORM.previewTemplate
        })
}]);
function indexController($scope,coreDataFactory){
    $scope.coreData = coreDataFactory.coreData;
}
formModule.controller(controllerId,['$scope','CoreDataFactory',indexController]);