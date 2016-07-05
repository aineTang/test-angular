/**
 * Created by aine on 7/5/16.
 */
'use strict';
var factoryId = "CoreDataFactory";
function coreDataFactory(){
    return {
        /*定义核心数据*/
        coreData:{
            status:'editor',
            items:[
                {
                    type:"text"
                },
                {
                    type:"date"
                },
                {
                    type:"date"
                },
                {
                    type:"text"
                }
            ]
        }

    }
}

angular.module('formApp')
    .factory(factoryId,[coreDataFactory]);