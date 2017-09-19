import { Component } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/retry';

@Component({
    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    //providers:[EmployeeService]


})

export class EmployeeComponent
{
    employees: IEmployee;
    statusMessage: string = 'Loading data. Please wait....';
    constructor(private _employeeService: EmployeeService, private _activatedRoute: ActivatedRoute,
    private _router:Router) {
    }

    onBackButtonClick(): void
    {
        this._router.navigate(['/employeeListComponent']);
    }
    ngOnInit() {
        let empCode: string = this._activatedRoute.snapshot.params['code'];
        this._employeeService.getEmployeeByCode(empCode).retry().subscribe((empData) => {
            if (empData == null) {
                this.statusMessage = 'Employee with the specific Employee not found!';
            }
            else {
                this.employees = empData;
            }
        },
            (error) => {
                this.statusMessage = 'Problem with service, please try again later';
                console.log(error);
            });
           
    }
    
    showDetails: boolean = false;
    toggleDetails(): void {
        this.showDetails = !this.showDetails;
    }
}