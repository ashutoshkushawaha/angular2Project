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
var router_1 = require("@angular/router");
require("rxjs/add/operator/retry");
var EmployeeComponent = (function () {
    function EmployeeComponent(_employeeService, _activatedRoute, _router) {
        this._employeeService = _employeeService;
        this._activatedRoute = _activatedRoute;
        this._router = _router;
        this.statusMessage = 'Loading data. Please wait....';
        this.showDetails = false;
    }
    EmployeeComponent.prototype.onBackButtonClick = function () {
        this._router.navigate(['/employeeListComponent']);
    };
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var empCode = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).retry().subscribe(function (empData) {
            if (empData == null) {
                _this.statusMessage = 'Employee with the specific Employee not found!';
            }
            else {
                _this.employees = empData;
            }
        }, function (error) {
            _this.statusMessage = 'Problem with service, please try again later';
            console.log(error);
        });
    };
    EmployeeComponent.prototype.toggleDetails = function () {
        this.showDetails = !this.showDetails;
    };
    return EmployeeComponent;
}());
EmployeeComponent = __decorate([
    core_1.Component({
        selector: 'my-employee',
        templateUrl: 'app/employee/employee.component.html',
    }),
    __metadata("design:paramtypes", [employee_service_1.EmployeeService, router_1.ActivatedRoute,
        router_1.Router])
], EmployeeComponent);
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map