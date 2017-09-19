import { Component} from '@angular/core';

@Component({
    selector: 'input-check', 
    template: `<input type='text' [(ngModel)]='userText'/>
<br/><br/>
<simple [simpleInput]='userText'></simple>`
    
})

export class InputCheckComponent {
    userText: string = 'Pragim';
}