import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterSearchResults } from './character-search-results';
import { Observable } from 'rxjs';
import { Character } from './character';

@Injectable()
export class CharacterService {

    //api url is of type string and it equals this api link
    apiUrl: string = 'https://rickandmortyapi.com/api';



    //Inside the constructer we define the dependencies we need injected for the component to do what it does so the component never gets 
    //created if it doesn't have all the dependencies it needs
    constructor(private http : HttpClient) { }

    // the thinngs after the : is the return type so observable<...> is the returnn type of the function
    searchForCharacters(searchString: string, isAlive: boolean) : Observable<CharacterSearchResults> {

        var status = 'dead';
        if(isAlive) {
            status = 'alive';
        }

        //setup the full url now and inject our variables to dynamically change it
        var endpoint = `${this.apiUrl}/character/?name=${searchString}&status=${status}`;

        //now we need to reference the http service in the constructor as an observable ( means after you get the 
        // thing to search for and you do your job then tell me what you did by returning this)
        return this.http.get<CharacterSearchResults>(endpoint);
    }

    // the thinngs after the : is the return type so observable<...> is the returnn type of the function
    getCharacter(id: number) : Observable<Character> {

        //setup the full url now and inject our variables to dynamically change it
        var endpoint = `${this.apiUrl}/character/${id}`;

        //now we need to reference the http service in the constructor as an observable ( means after you get the 
        // thing to search for and you do your job then tell me what you did by returning this)
        return this.http.get<Character>(endpoint);
    }


    //method for get all characters 
    getCharacters(page: number): Observable<CharacterSearchResults> {
        var endpoint = `${this.apiUrl}/character/?page=${page}`;
        return this.http.get<CharacterSearchResults>(endpoint);
    }
}


