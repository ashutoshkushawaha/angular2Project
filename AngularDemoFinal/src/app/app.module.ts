import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';
//If you're using PathLocationStrategy, you must provide a provider to a string representing the URL prefix that should be preserved when generating and recognizing URLs.
//import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { SimpleComponent } from './Others/simple.component';
import { InputCheckComponent } from './Others/inputCheck.component';
import { UserListComponent } from './employee/userList.component';
import { PageNotFoundComponent } from './main/pageNotFound.component';
import { HomeComponent } from './main/home.component';
import { EmployeeService } from './employee/employee.service';
import { UserDetailsComponent } from './userDetails/userDetails.component';
import { UserService } from './service/user.service';
import { Ng2Bs3ModalModule } from 'ng2-bs3-modal/ng2-bs3-modal';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule, HttpModule, Ng2Bs3ModalModule ],
    declarations: [AppComponent, EmployeeComponent, StudentComponent, EmployeeListComponent, EmployeeTitlePipe, EmployeeCountComponent, SimpleComponent, InputCheckComponent, UserListComponent,
        PageNotFoundComponent, HomeComponent, UserDetailsComponent],
    bootstrap: [AppComponent],
    providers: [EmployeeService, UserService]

})

export class AppModule {
}
