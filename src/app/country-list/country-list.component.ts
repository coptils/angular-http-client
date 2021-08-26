import { Component, OnInit } from '@angular/core';
import { RestApiService } from "../shared/rest-api.service";

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html'
})
export class CountryListComponent implements OnInit {

  Country: any = [];
  data: string = '';

  constructor(
    public restApi: RestApiService
  ) { }
  
  ngOnInit() {
    this.loadCountries()
  }

  // Get countries list
  loadCountries() {
    return this.restApi.getCountries().subscribe((data: {}) => {
      this.Country = data;
    })
  }
}
