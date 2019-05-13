import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EpisodeSearchResults } from './episode-search-results';

@Injectable()
export class EpisodeService {

    apiUrl: string = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) { }



    //method for get all characters 
    getEpisodes(page: number): Observable<EpisodeSearchResults> {
        var endpoint = `${this.apiUrl}/episode/?page=${page}`;
        return this.http.get<EpisodeSearchResults>(endpoint);
    }


}
