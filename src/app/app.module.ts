import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatSelectModule,
         MatMenuModule, MatStepperModule, MatTableModule
       } from '@angular/material';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { OutputBuildComponent } from './output/build/output-build.component';
import { OutputEditComponent } from './output/edit/output-edit.component';
import { InputComponent } from './input/input.component';
import { InputSelectComponent } from './input/select/input-select.component';
import { InputBuildComponent } from './input/build/input-build.component';
import { InputEditComponent } from './input/edit/input-edit.component';

@NgModule({
    declarations: [
        AppComponent,        
        OutputComponent, OutputBuildComponent, OutputEditComponent,
        InputComponent, InputSelectComponent, InputBuildComponent, InputEditComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, FormsModule,
        MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule,
        MatSelectModule, MatMenuModule, MatStepperModule, MatTableModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
