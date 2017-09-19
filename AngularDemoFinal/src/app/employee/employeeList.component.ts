import { Component,OnInit } from '@angular/core';
import { IEmployee } from './employee';
import {EmployeeService} from './employee.service'

@Component({
    selector:'list-employee',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})
export class EmployeeListComponent implements OnInit {
    employees: IEmployee[];
    selectedEmployeeCountRadioButton: string = 'All';
    constructor(private _employeeService: EmployeeService) {
        //this.employees = this._employeeService.getEmployees();
    }

    ngOnInit()
    {
        this._employeeService.getEmployeeDetail().retry().subscribe((employeeData) => this.employees = employeeData);
    }

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
    trackByEmpCode(index: number, employee: any): string {
        return employee.code;
    }

    getTotalEmployeeCount(): number {
        return this.employees.length;
    }

    getTotalMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Male').length;
    }
    getTotalFeMaleEmployeeCount(): number {
        return this.employees.filter(e => e.gender === 'Female').length;
    }

    onEmployeeCountRadioButtonChange(selectedRadioButtonValue: string): void {
        this.selectedEmployeeCountRadioButton = selectedRadioButtonValue;
    }
}

