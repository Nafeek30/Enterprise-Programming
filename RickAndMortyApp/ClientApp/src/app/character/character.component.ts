import { Component, OnInit, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

    //where is this name coming from? - in the api page of Rick and Morty the name is given 
    @Input() character: Character;


  constructor() { }

  ngOnInit() {
  }

}
