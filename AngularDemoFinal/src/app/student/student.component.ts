import { Component } from '@angular/core';


@Component({
    selector: 'my-student',
    template: `
Name:<input [(value)]='name' (input)='name=$event.target.value'/>
<br/>
    you entered :{{name}}
Name:<input [(ngModel)]='address'/>
<br/>
    you entered :{{address}}
`
})
export class StudentComponent {
    name: string = 'Tom';
    address: string = 'ktm';
}