"use strict";
var City = (function () {
    function City(id, city, start_date, end_date, price, status, color) {
        this.id = id;
        this.city = city;
        this.start_date = start_date;
        this.end_date = end_date;
        this.price = price;
        this.status = status;
        this.color = color;
    }
    return City;
}());
exports.City = City;
//# sourceMappingURL=city.js.map