///<reference path="..\components\Constants.ts"/>

module MyApp.View1 {

    export class View1Controller {

        private stateService: ng.ui.IStateService;


        constructor($state:ng.ui.IStateService) {
            this.stateService = $state;
        }

        public changeViewState() {
            this.stateService.go(MyApp.Components.Constants.VIEW_2);
        }

    }

}