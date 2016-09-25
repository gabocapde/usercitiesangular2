import {Http} from '@angular/http';
import { Component } from '@angular/core';
import { City } from './city';

@Component({
	selector: 'my-app',
    templateUrl: 'templates/_appComponent.html'
})
export class AppComponent {
	cities;

	constructor(private http:Http) {
        this.http.get('data/data.json')
                .subscribe(res => this.cities = res.json());
	}

	addCity(newCity: string) {
		if (newCity) {
			this.cities.push(newCity);
		}
	}
}