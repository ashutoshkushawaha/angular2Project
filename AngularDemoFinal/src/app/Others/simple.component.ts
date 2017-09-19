import { Component,Input,OnChanges,SimpleChanges } from '@angular/core';

@Component({
    selector: 'simple',
    template:`you enter: {{simpleInput}}`

})
export class SimpleComponent implements OnChanges {
    @Input() simpleInput: string;

    ngOnChanges(changes: SimpleChanges)
    {
        for (let propertyName in changes)
        {
            let change = changes[propertyName];
            let cureeent = JSON.stringify(change.currentValue);
            let previous = JSON.stringify(change.previousValue);
            console.log(propertyName + ':+currentValue=' + cureeent + ',previousValue=' + previous);
        }
    }
}
