"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.PageHeader = 'Employee Header';
        this.classesToApply = 'italicClass boldClass';
        this.applyBoldClass = true;
        this.applyItalicClass = false;
    }
    AppComponent.prototype.addClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    AppComponent.prototype.onClick = function () {
        console.log("Button Clicked");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-apps',
        //    template: `<div>
        //<button class="colorClass" [class]='classesToApply'>My Button</button>
        //<br/>
        //<br/>
        //<button class="colorClass" [class.boldClass]='applyBoldClass'>My Button</button>
        //<button class="colorClass" [ngClass]='addClasses()'>My Button</button>
        //<button (click)='onClick()'>Click Me</button>
        //<button on-click='onClick()'>Click Me by other event</button>
        //<h1> {{PageHeader}}</h1>
        //<my-employee></my-employee>
        //<br/>
        //<my-student></my-student>
        //<br/>
        //<br/>
        //<list-employee></list-employee>
        //</div>
        //`
        templateUrl: 'app/main/demo.html'
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map