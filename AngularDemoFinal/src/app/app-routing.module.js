"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var employee_component_1 = require("./employee/employee.component");
var student_component_1 = require("./student/student.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var inputCheck_component_1 = require("./Others/inputCheck.component");
var userList_component_1 = require("./employee/userList.component");
var pageNotFound_component_1 = require("./main/pageNotFound.component");
var home_component_1 = require("./main/home.component");
var userDetails_component_1 = require("./userDetails/userDetails.component");
var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'employeeComponent', component: employee_component_1.EmployeeComponent },
    { path: 'employeeCountComponent', component: employeeCount_component_1.EmployeeCountComponent },
    { path: 'employeeListComponent', component: employeeList_component_1.EmployeeListComponent },
    { path: 'employeeListComponent/:code', component: employee_component_1.EmployeeComponent },
    { path: 'studentComponent', component: student_component_1.StudentComponent },
    { path: 'inputCheckComponent', component: inputCheck_component_1.InputCheckComponent },
    { path: 'userListComponent', component: userList_component_1.UserListComponent },
    { path: 'userDetails', component: userDetails_component_1.UserDetailsComponent },
    { path: '**', component: pageNotFound_component_1.PageNotFoundComponent }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes, { useHash: true })],
        exports: [router_1.RouterModule]
    })
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map