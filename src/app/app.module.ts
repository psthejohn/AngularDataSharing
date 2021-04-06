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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './products/products.component'

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildrentoparentComponent,
    ParenttochildrenComponent,
    TemplateDrivenFormComponent,
    HomeComponent,
    LoginComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatButtonModule,    // Adding Mat Buttons 
    MatCardModule,      // Adding Mat Cards
    AppRoutingModule,   // Adding routing
    FormsModule,         // Template Driven Forms
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
