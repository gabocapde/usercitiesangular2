import { Pipe } from '@angular/core';

@Pipe({
  name: "sort"
})
export class OrderByPipe {
	transform(array: Array<string>, variable: string, orderAsc: boolean): Array<string> {
		if (array != undefined){
			array.sort((a: any, b: any) => {
				var aVariable = a[variable];
				var bVariable = b[variable];
				if (variable == "start_date" || variable == "end_date"){
					aVariable = this.getDateString(a[variable]);
					bVariable = this.getDateString(b[variable]);
				}
				if (aVariable < bVariable) {
					return (orderAsc ? -1 : 1);
				} else if (aVariable > bVariable) {
					return (orderAsc ? 1 : -1);
				} else {
					return 0;
				}
			});
		}
		return array;
	},
	getDateString(dateVar){
		if (dateVar != undefined && dateVar.indexOf("/") > -1){
			var date = dateVar.split('/');
			return date[2] + ((date[0].length == 1) ? "0" + date[0] : date[0]) + ((date[1].length == 1) ? "0" + date[1] : date[1] );
		}
		return dateVar;
	}
}