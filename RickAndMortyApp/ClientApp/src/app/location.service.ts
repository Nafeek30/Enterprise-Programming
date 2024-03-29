import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocationSearchResults } from './location-search-results';

@Injectable()
export class LocationService {

  apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }



    //method for get all characters 
    getLocations(page: number): Observable<LocationSearchResults> {
        var endpoint = `${this.apiUrl}/location/?page=${page}`;
        return this.http.get<LocationSearchResults>(endpoint);
    }


}
