import { Component, OnInit } from '@angular/core';
import { ParamMap } from '../../../node_modules/@angular/router';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { CharacterService } from '../character.service';
import { Character } from '../character';


@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

    private character: Character;

    constructor(private route: ActivatedRoute, 
        private service : CharacterService) { }

    ngOnInit() {
        //get the parameter detail of one character; ParaMap here contains detail for one param but it may contain more for (eg, sth/:id/:repo)
        this.route.paramMap.pipe(
            switchMap((params: ParamMap) => 
                this.service.getCharacter(Number(params.get('id'))))
            //we need to subscribe to this so we can extrapolate data from this pipe
        ).subscribe((data: Character) => this.character = data);
        //so whenever someone navigates to the Character routw above it'll extrat whatever id is passed in the route, we extract that number 
        //and execute getCharacter on that as done in code above; the characterService will then make the http call to fetch the specific 
        //character from the RickAndMorty api and return that observable to this pipe above, and then we subscribe to that and just get 
        //all the data of that in the last line of code
    }

}
