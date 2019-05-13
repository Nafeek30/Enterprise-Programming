import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
import { CharacterSearchResults } from '../character-search-results';
import { Character } from '../character';
import { CanComponentDeactivate } from '../is-saved.guard';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
     


    searchString: string;
    isAlive: boolean;
    searchResults: Character[];
    //loading screen when searching to show users sth while we search
    loading: boolean = false;
    //error handling property
    searchFailed: boolean = false;

  constructor(private characterService : CharacterService) { }

  ngOnInit() {
  }


    search() {
        //initial state when we click search
        this.loading = true;
        this.searchFailed = false;

        this.characterService.searchForCharacters(this.searchString, this.isAlive)
            .subscribe(
                (data: CharacterSearchResults) => {this.searchResults = data.results; this.loading = false;},
                 (error: any) => { console.log(error); this.searchFailed = true; this.loading = false; });
    }

}
