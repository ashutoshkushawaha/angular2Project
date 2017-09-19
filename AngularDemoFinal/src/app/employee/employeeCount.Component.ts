import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
    selector: 'employee-count',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls:['app/employee/employeeCount.component.css']
})
export class EmployeeCountComponent {
    selectedRadioButtonValue: string = 'All';
    @Output()
    countRadioButtonSelecteionChanged: EventEmitter<string> = new EventEmitter<string>();
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;
    onRadioButtonSelectionChange() {
        this.countRadioButtonSelecteionChanged.emit(this.selectedRadioButtonValue);
        console.log(this.selectedRadioButtonValue);
    }
}