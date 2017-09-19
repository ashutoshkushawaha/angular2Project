import { Component, OnInit } from '@angular/core';
import { IUserDetail } from './UserDetail';
import { EmployeeService } from './employee.service';

@Component({
    selector: 'user-detail',
    templateUrl: 'app/employee/userList.component.html',
    providers: [EmployeeService]

})

export class UserListComponent implements OnInit
{
    userList: IUserDetail[];
    statusMessage: string = 'Loading data. please wait.....';
    constructor(private _employeeService: EmployeeService) {
        //this.employees = this._employeeService.getEmployees();
    }

    ngOnInit() {
        //this is to check calling api return data or not/
       // this._employeeService.getUserDetail().subscribe(val => console.log(val));

       this._employeeService.getUserDetail()
           .subscribe(userData => this.userList = userData,
           (error) => {
               this.statusMessage = "problem with the service, please try again later!";
           });

    }
}