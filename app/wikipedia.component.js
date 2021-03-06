System.register(['@angular/core', './wikipedia.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, wikipedia_service_1;
    var WikiComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (wikipedia_service_1_1) {
                wikipedia_service_1 = wikipedia_service_1_1;
            }],
        execute: function() {
            WikiComponent = (function () {
                function WikiComponent(wikipediaService) {
                    this.wikipediaService = wikipediaService;
                }
                WikiComponent.prototype.search = function (term) {
                    this.items = this.wikipediaService.search(term);
                };
                WikiComponent = __decorate([
                    core_1.Component({
                        selector: 'my-wiki',
                        template: "\n    <h1>wikipedia</h1>\n    <p><i>type here</i></p>\n    <input #term (keyup)=\"search(term.value)\"/>\n    <ul>\n      <li *ngFor=\"let item of items | async\">{{item}}</li>\n    </ul>\n  ",
                        providers: [wikipedia_service_1.WikipediaService]
                    }), 
                    __metadata('design:paramtypes', [wikipedia_service_1.WikipediaService])
                ], WikiComponent);
                return WikiComponent;
            }());
            exports_1("WikiComponent", WikiComponent);
        }
    }
});
//# sourceMappingURL=wikipedia.component.js.map