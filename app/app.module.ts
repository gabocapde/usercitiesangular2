import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable.component';
import { ColumnComponent } from './column.component';
import { OrderByPipe } from './order.pipe';
import { UserFormComponent } from './user-form.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, ReactiveFormsModule ],
  declarations: [ AppComponent, DatatableComponent, ColumnComponent, OrderByPipe, UserFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
