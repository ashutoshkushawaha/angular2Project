import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EmployeeComponent } from './employee/employee.component';
import { StudentComponent } from './student/student.component';
import { EmployeeListComponent } from './employee/employeeList.component';
import { EmployeeTitlePipe } from './employee/employeTitle.pipe';
import { EmployeeCountComponent } from './employee/employeeCount.component';
import { InputCheckComponent } from './Others/inputCheck.component';
import { UserListComponent } from './employee/userList.component';
import { PageNotFoundComponent } from './main/pageNotFound.component';
import { HomeComponent } from './main/home.component';
import { UserDetailsComponent } from './userDetails/userDetails.component';




const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'employeeComponent', component: EmployeeComponent },
    { path: 'employeeCountComponent', component: EmployeeCountComponent },
    { path: 'employeeListComponent', component: EmployeeListComponent },
    { path: 'employeeListComponent/:code', component: EmployeeComponent },
    { path: 'studentComponent', component: StudentComponent },
    { path: 'inputCheckComponent', component: InputCheckComponent },
    { path: 'userListComponent', component: UserListComponent },
    { path: 'userDetails', component: UserDetailsComponent },

    { path: '**', component: PageNotFoundComponent }

];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
