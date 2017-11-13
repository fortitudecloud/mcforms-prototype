import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'app';
    studentName: string = 'Hoggy';
    greetingBody: string = 'Come to a school where your dreams come true. Trust us, we got this :)';
    greetingBodyPos: number = 0;
    fields: [{ value: string, viewValue: string }] = [{
        value: 'StudentName',
        viewValue: 'Student Name'
    }, {
        value: 'ParentName',
        viewValue: 'Parent\'s Name'
    }];
    selectedField: { value: string, viewValue: string } = this.fields[0];

    setField(e: any) {
        this.selectedField = this.fields.find(f => f.value === e.value);
    }

    getBodyCaretPos(e: any) {        
        this.greetingBodyPos = e.target.selectionStart || 0;
        //console.log(this.greetingBody);
        //this.greetingBody.replace(/(\r\n|\n|\r)/gm,"");
    }

    addNewLine() {
        this.greetingBody = (this.greetingBody.substring(0, this.greetingBodyPos) + "&newLine" + this.greetingBody.substring(this.greetingBodyPos));
    }
}
