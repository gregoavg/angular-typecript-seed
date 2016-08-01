///<reference path="typings/index.d.ts"/>
///<reference path="components\constants.ts"/>
///<reference path="view1\_view1.ts"/>
///<reference path="view2\_view2.ts"/>

angular.module("myApp", [
        'ui.router',
        'myApp.view1',
        'myApp.view2'
    ])
    .config(($stateProvider, $urlRouterProvider) => {
        var pages = {
            "view1": {
                "url": "/view1",
                "templateUrl": "view1/view1.html",
                "controller": "View1Controller as con"
            },

            "view2": {
                "url": "/view2",
                "templateUrl": "view2/view2.html",
                "controller": "View2Controller as con",
            }
        };

        $stateProvider.state(MyApp.Components.Constants.VIEW_1, pages.view1)
                .state(MyApp.Components.Constants.VIEW_2, pages.view2);

        $urlRouterProvider.otherwise("/view1");
    });

angular.element(document).ready(() => {
   angular.bootstrap(document, ["myApp"]);
});