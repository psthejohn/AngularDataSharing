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

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrentoparentComponent,
    ParenttochildrenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
