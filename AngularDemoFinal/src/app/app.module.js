"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var http_1 = require("@angular/http");
//If you're using PathLocationStrategy, you must provide a provider to a string representing the URL prefix that should be preserved when generating and recognizing URLs.
//import { APP_BASE_HREF } from '@angular/common';
var app_component_1 = require("./app.component");
var employee_component_1 = require("./employee/employee.component");
var student_component_1 = require("./student/student.component");
var employeeList_component_1 = require("./employee/employeeList.component");
var employeTitle_pipe_1 = require("./employee/employeTitle.pipe");
var employeeCount_component_1 = require("./employee/employeeCount.component");
var simple_component_1 = require("./Others/simple.component");
var inputCheck_component_1 = require("./Others/inputCheck.component");
var userList_component_1 = require("./employee/userList.component");
var pageNotFound_component_1 = require("./main/pageNotFound.component");
var home_component_1 = require("./main/home.component");
var employee_service_1 = require("./employee/employee.service");
var userDetails_component_1 = require("./userDetails/userDetails.component");
var user_service_1 = require("./service/user.service");
var ng2_bs3_modal_1 = require("ng2-bs3-modal/ng2-bs3-modal");
var forms_2 = require("@angular/forms");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, app_routing_module_1.AppRoutingModule, forms_2.ReactiveFormsModule, http_1.HttpModule, ng2_bs3_modal_1.Ng2Bs3ModalModule],
        declarations: [app_component_1.AppComponent, employee_component_1.EmployeeComponent, student_component_1.StudentComponent, employeeList_component_1.EmployeeListComponent, employeTitle_pipe_1.EmployeeTitlePipe, employeeCount_component_1.EmployeeCountComponent, simple_component_1.SimpleComponent, inputCheck_component_1.InputCheckComponent, userList_component_1.UserListComponent,
            pageNotFound_component_1.PageNotFoundComponent, home_component_1.HomeComponent, userDetails_component_1.UserDetailsComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [employee_service_1.EmployeeService, user_service_1.UserService]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map