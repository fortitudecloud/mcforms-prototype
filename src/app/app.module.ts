import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule, BrowserAnimationsModule, FormsModule,
        MatButtonModule, MatCheckboxModule, MatInputModule, MatCardModule,
        MatSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
