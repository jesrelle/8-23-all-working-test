System.register(['@angular/core', './rxjs-operators'], function(exports_1, context_1) {
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
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<div class=\"fullscreen nopadding\">\n  <div id=\"header\">\n    <img src=\"http://blog.codepen.io/wp-content/uploads/2012/06/Button-Black-Small.png\" width=\"50px\" />\n    <ul>\n      <li>Home</li>\n      <li>About</li>\n    </ul>\n  </div>\n  <div class=\"header\">\n    <h1>withcenter online spelling dictionary</h1>\n  </div>\n</div>\n\n\n\n<div class=\"white\">\n  <a id=\"test\"></a>\n  <h1>TO DO</h1>\n  <img class=\"floatright\" src=\"http://www.2020site.org/trees/images/PineNeedles.jpg\" />\n  <my-wiki></my-wiki>\n\n<br>\n\n  \n\n</div>\n\n\n\n<div class=\"dark\">\n  <p>with http client and unit testing jasmine karma</p>\n</div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map