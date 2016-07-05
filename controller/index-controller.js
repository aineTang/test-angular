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
function indexController($scope,coreDataFactory){
    $scope.coreData = coreDataFactory.coreData;;
}
formModule.controller(controllerId,['$scope','CoreDataFactory',indexController]);