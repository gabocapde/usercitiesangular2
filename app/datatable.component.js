"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var order_pipe_1 = require('./order.pipe');
var DatatableComponent = (function () {
    function DatatableComponent() {
        this.enableFilter = false;
        this.columns = [];
        this.queryStart = "";
        this.queryEnd = "";
        this.orderVar = "city";
        this.orderAsc = true;
    }
    DatatableComponent.prototype.addColumn = function (column) {
        this.columns.push(column);
    };
    DatatableComponent.prototype.getData = function () {
        if (this.queryStart !== "" || this.queryEnd !== "") {
            return this.filteredList;
        }
        else {
            return this.dataset;
        }
    };
    DatatableComponent.prototype.changeOrder = function (column) {
        if (this.orderVar == column.value) {
            this.orderAsc = !this.orderAsc;
        }
        else {
            this.orderVar = column.value;
        }
    };
    DatatableComponent.prototype.filter = function () {
        this.filteredList = this.dataset.filter(function (el) {
            //Using DATEJS and Date.parse makes it extremely slow
            var startDate = el.start_date.split('/');
            var startDateString = startDate[2] + "-" + ((startDate[0].length == 1) ? "0" + startDate[0] : startDate[0]) + "-" + ((startDate[1].length == 1) ? "0" + startDate[1] : startDate[1]);
            var endDate = el.end_date.split('/');
            var endDateString = endDate[2] + "-" + ((endDate[0].length == 1) ? "0" + endDate[0] : endDate[0]) + "-" + ((endDate[1].length == 1) ? "0" + endDate[1] : endDate[1]);
            var isAfterStartDate = (this.queryStart != '') ? this.queryStart <= startDateString : true;
            var isBeforeDate = (this.queryEnd != '') ? this.queryEnd >= endDateString : true;
            return isAfterStartDate && isBeforeDate;
        }.bind(this));
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "dataset", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], DatatableComponent.prototype, "enableFilter", void 0);
    DatatableComponent = __decorate([
        core_1.Component({
            selector: 'datatable',
            templateUrl: 'templates/_datatableComponent.html',
            pipes: [order_pipe_1.OrderByPipe]
        }), 
        __metadata('design:paramtypes', [])
    ], DatatableComponent);
    return DatatableComponent;
}());
exports.DatatableComponent = DatatableComponent;
//# sourceMappingURL=datatable.component.js.map