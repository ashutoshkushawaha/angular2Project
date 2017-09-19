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
var EmployeeListComponent = (function () {
    function EmployeeListComponent(_employeeService) {
        this._employeeService = _employeeService;
        this.selectedEmployeeCountRadioButton = 'All';
        //this.employees = this._employeeService.getEmployees();
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._employeeService.getEmployeeDetail().retry().subscribe(function (employeeData) { return _this.employees = employeeData; });
    };
    //constructor() {
    //    this.employees = [
    //        { code: 'oo1', name: 'Tom', gender:'Male', address: 'ktm', phone: '488484848' },
    //        { code: 'oo2', name: 'Tom1', gender: 'Male', address: 'ktm1', phone: '48248484848' },
    //        { code: 'oo3', name: 'Tom2', gender: 'Female', address: 'ktm2', phone: '4883484848' },
    //        { code: 'oo1', name: 'Tom', gender: 'Male', address: 'ktm', phone: '488484848' },
    //        { code: 'oo2', name: 'Tom1', gender: 'Male', address: 'ktm1', phone: '48248484848' },
    //        { code: 'oo3', name: 'Tom2', gender: 'Female', address: 'ktm2', phone: '4883484848' },
    //    ];
    //}
    EmployeeListComponent.prototype.trackByEmpCode = function (index, employee) {
        return employee.code;
    };
    EmployeeListComponent.prototype.getTotalEmployeeCount = function () {
        return this.employees.length;
    };
    EmployeeListComponent.prototype.getTotalMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalFeMaleEmployeeCount = function () {
        return this.employees.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent.prototype.onEmployeeCountRadioButtonChange = function (selectedRadioButtonValue) {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    };
    return EmployeeListComponent;
}());
EmployeeListComponent = __decorate([
    core_1.Component({
        selector: 'list-employee',
        templateUrl: 'app/employee/employeeList.component.html',
        styleUrls: ['app/employee/employeeList.component.css'],
        providers: [employee_service_1.EmployeeService]
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService])
], EmployeeListComponent);
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map