import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatStepper } from '@angular/material';

@Component({
    selector: 'kalve-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @ViewChild(MatStepper) stepper: MatStepper;
    mode: string = "start"

    displayedColumns = ['name', 'faculty', 'course'];
    //dataSource: MatTableDataSource<Template>;
    dataSource = new MatTableDataSource<Template>(TEMPLATE_DATA);

    selected(row) {
        alert(row);
        this.stepper.next();
    }
}

export interface Element {
    name: string;
    position: number;
    weight: number;
    symbol: string;
  }

export interface Template {
    name: string;
    faculty: string;
    course: string;
}
  
const TEMPLATE_DATA: Template[] = [
    { name: 'New Student', faculty: 'Medicine', course: 'Medicine 101' }
];
