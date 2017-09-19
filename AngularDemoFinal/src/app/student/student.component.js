"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var StudentComponent = (function () {
    function StudentComponent() {
        this.name = 'Tom';
        this.address = 'ktm';
    }
    return StudentComponent;
}());
StudentComponent = __decorate([
    core_1.Component({
        selector: 'my-student',
        template: "\nName:<input [(value)]='name' (input)='name=$event.target.value'/>\n<br/>\n    you entered :{{name}}\nName:<input [(ngModel)]='address'/>\n<br/>\n    you entered :{{address}}\n"
    })
], StudentComponent);
exports.StudentComponent = StudentComponent;
//# sourceMappingURL=student.component.js.map