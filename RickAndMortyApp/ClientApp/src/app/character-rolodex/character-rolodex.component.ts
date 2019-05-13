import { Component, OnInit } from '@angular/core';
import { CharacterSearchResults } from '../character-search-results';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-character-rolodex',
  templateUrl: './character-rolodex.component.html',
  styleUrls: ['./character-rolodex.component.css']
})
export class CharacterRolodexComponent implements OnInit {

    private characterResults: CharacterSearchResults;
    private currentPage: number = 1;

    //characterImageUrl: string = 'https://rickandmortyapi.com/api/character/avatar/2.jpeg';
    //isCharacterDead: boolean = false;


  constructor(private service : CharacterService) { }

    ngOnInit() {
        //fetch the first page of characters
        this.service.getCharacters(this.currentPage).subscribe((data: CharacterSearchResults) => this.characterResults = data);
    }

    //refresh Page to reload to go to current or previous page
    refreshResults() {
        this.service.getCharacters(this.currentPage).subscribe((data: CharacterSearchResults) => this.characterResults = data);
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
