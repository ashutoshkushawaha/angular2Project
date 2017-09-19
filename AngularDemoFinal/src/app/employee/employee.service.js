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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var EmployeeService = (function () {
    function EmployeeService(_http) {
        this._http = _http;
    }
    EmployeeService.prototype.getUserDetail = function () {
        var item = this._http.get("https://jsonplaceholder.typicode.com/posts/1")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        return item;
    };
    EmployeeService.prototype.getEmployeeDetail = function () {
        var item = this._http.get("http://localhost:60097/api/employees/")
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
        return item;
    };
    EmployeeService.prototype.getEmployeeByCode = function (empCode) {
        return this._http.get("http://localhost:60097/api/employees/" + empCode).
            map(function (response) { return response.json(); }).
            catch(this.handleError);
    };
    EmployeeService.prototype.handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error);
    };
    EmployeeService.prototype.getEmployees = function () {
        return [
            { code: 'oo1', name: 'Tom', gender: 'Male', annualSalary: '11100', dateOfBirth: '11/11/2017' },
            { code: 'oo2', name: 'Tom1', gender: 'Male', annualSalary: '11100', dateOfBirth: '11/11/2017' },
            { code: 'oo3', name: 'Tom2', gender: 'Female', annualSalary: '1234', dateOfBirth: '11/11/2017' },
            { code: 'oo1', name: 'Tom', gender: 'Male', annualSalary: '12345', dateOfBirth: '11/11/2017' },
            { code: 'oo2', name: 'Tom1', gender: 'Male', annualSalary: '3456', dateOfBirth: '11/11/2017' },
            { code: 'oo3', name: 'Tom2', gender: 'Female', annualSalary: '6544', dateOfBirth: '11/11/2017' },
        ];
    };
    return EmployeeService;
}());
EmployeeService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], EmployeeService);
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map