"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var employee_service_1 = require("./employee.service");
var UserListComponent = (function () {
    function UserListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.statusMessage = 'Loading data. please wait.....';
        //this.employees = this._employeeService.getEmployees();
    }
    UserListComponent.prototype.ngOnInit = function () {
        //this is to check calling api return data or not/
        // this._employeeService.getUserDetail().subscribe(val => console.log(val));
        var _this = this;
        this._employeeService.getUserDetail()
            .subscribe(function (userData) { return _this.userList = userData; }, function (error) {
            _this.statusMessage = "problem with the service, please try again later!";
        });
    };
    return UserListComponent;
}());
UserListComponent = __decorate([
    core_1.Component({
        selector: 'user-detail',
        templateUrl: 'app/employee/userList.component.html',
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], UserListComponent);
exports.UserListComponent = UserListComponent;
//# sourceMappingURL=userList.component.js.map