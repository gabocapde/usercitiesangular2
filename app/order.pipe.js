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
var OrderByPipe = (function () {
    function OrderByPipe() {
    }
    OrderByPipe.prototype.transform = function (array, variable, orderAsc) {
        var _this = this;
        if (array != undefined) {
            array.sort(function (a, b) {
                var aVariable = a[variable];
                var bVariable = b[variable];
                if (variable == "start_date" || variable == "end_date") {
                    aVariable = _this.getDateString(a[variable]);
                    bVariable = _this.getDateString(b[variable]);
                }
                if (aVariable < bVariable) {
                    return (orderAsc ? -1 : 1);
                }
                else if (aVariable > bVariable) {
                    return (orderAsc ? 1 : -1);
                }
                else {
                    return 0;
                }
            });
        }
        return array;
    };
    OrderByPipe.prototype.getDateString = function (dateVar) {
        if (dateVar != undefined && dateVar.indexOf("/") > -1) {
            var date = dateVar.split('/');
            return date[2] + ((date[0].length == 1) ? "0" + date[0] : date[0]) + ((date[1].length == 1) ? "0" + date[1] : date[1]);
        }
        return dateVar;
    };
    OrderByPipe = __decorate([
        core_1.Pipe({
            name: "sort"
        }), 
        __metadata('design:paramtypes', [])
    ], OrderByPipe);
    return OrderByPipe;
}());
exports.OrderByPipe = OrderByPipe;
//# sourceMappingURL=order.pipe.js.map