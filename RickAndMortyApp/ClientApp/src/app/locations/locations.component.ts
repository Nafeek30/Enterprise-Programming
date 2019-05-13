import { Component, OnInit } from '@angular/core';
import { LocationService } from '../location.service';
import { LocationSearchResults } from '../location-search-results';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent implements OnInit {

  private locationResults: LocationSearchResults;
    private currentPage: number = 1;


  constructor(private service : LocationService) { }

    ngOnInit() {
        //fetch the first page of locations
        this.service.getLocations(this.currentPage).subscribe((data: LocationSearchResults) => this.locationResults = data);
    }

    //refresh Page to reload to go to current or previous page
    refreshResults() {
        this.service.getLocations(this.currentPage).subscribe((data: LocationSearchResults) => this.locationResults = data);
    }

    //go to the next page
    nextPage() {
        this.currentPage++;
        this.refreshResults();
    }

    //go to the previous page
    previousPage() {
        this.currentPage--;
        this.refreshResults();
    }

}
