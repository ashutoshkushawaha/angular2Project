import { Component } from '@angular/core';

@Component({
    selector: 'my-apps',
//    template: `<div>
//<button class="colorClass" [class]='classesToApply'>My Button</button>
//<br/>
//<br/>
//<button class="colorClass" [class.boldClass]='applyBoldClass'>My Button</button>
//<button class="colorClass" [ngClass]='addClasses()'>My Button</button>
//<button (click)='onClick()'>Click Me</button>
//<button on-click='onClick()'>Click Me by other event</button>

//<h1> {{PageHeader}}</h1>
//<my-employee></my-employee>

//<br/>

//<my-student></my-student>
//<br/>
//<br/>
//<list-employee></list-employee>
//</div>


    //`
    templateUrl:'app/main/demo.html'
})
export class AppComponent {
    PageHeader = 'Employee Header';
    classesToApply: string = 'italicClass boldClass';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = false;
    addClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    }
    onClick(): void
    {
        console.log("Button Clicked");
    }
}