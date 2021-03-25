import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildrentoparentComponent } from './parent/childrentoparent/childrentoparent.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ParenttochildrenComponent } from './parent/parenttochildren/parenttochildren.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrentoparentComponent,
    ParenttochildrenComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,    // Adding Mat Buttons 
    MatCardModule,      // Adding Mat Cards
    AppRoutingModule,   // Adding routing
    FormsModule         // Template Driven Forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
