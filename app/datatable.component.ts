import { Http, Response } from '@angular/http';
import { Injectable, Component, Input } from '@angular/core';
import { ColumnComponent } from './column.component';
import { OrderByPipe } from './order.pipe';
 
@Component({
	selector: 'datatable',
    templateUrl: 'templates/_datatableComponent.html',
	pipes: [ OrderByPipe ]
})
export class DatatableComponent { 
 
  @Input() dataset;
  @Input() enableFilter = false;
  columns: ColumnComponent[] = [];
  queryStart = "";
  queryEnd = "";
  filteredList;
  orderVar = "city";
  orderAsc = true;
 
  addColumn(column){
    this.columns.push(column);
  }
 
  getData(){
    if(this.queryStart !== "" || this.queryEnd !== ""){
      return this.filteredList;
    }else{
      return this.dataset;  
    }
  }
   
  changeOrder(column){
	if (this.orderVar == column.value){
		this.orderAsc = !this.orderAsc;
	}else{
		this.orderVar = column.value;
	}
  }
   
  filter(){
    this.filteredList = this.dataset.filter(function(el){
		//Using DATEJS and Date.parse makes it extremely slow
		var startDate = el.start_date.split('/');
		var startDateString = startDate[2] + "-" + ((startDate[0].length == 1) ? "0" + startDate[0] : startDate[0]) + "-" + ((startDate[1].length == 1) ? "0" + startDate[1] : startDate[1] );
		var endDate = el.end_date.split('/');
		var endDateString = endDate[2] + "-" + ((endDate[0].length == 1) ? "0" + endDate[0] : endDate[0]) + "-" + ((endDate[1].length == 1) ? "0" + endDate[1] : endDate[1] );
		var isAfterStartDate = (this.queryStart != '') ? this.queryStart <= startDateString : true;
		var isBeforeDate = (this.queryEnd != '') ? this.queryEnd >= endDateString : true;

        return isAfterStartDate && isBeforeDate;
    }.bind(this));
  }
}