import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services';

@Component({
  selector: 'character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  private _description: string = '';
  private _background: string = '';
  private _concept: string = '';
  private _notes: string = '';

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.characterData$.subscribe( character => {
      this.description = character.description;
      this.background = character.background;
      this.concept = character.concept;
      this.notes = character.notes;
    });
  }

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
  }

  get background() {
    return this._background;
  }

  set background(background: string) {
    this._background = background;
  }

  get concept() {
    return this._concept;
  }

  set concept(concept: string) {
    this._concept = concept;
  }

  get notes() {
    return this._notes;
  }

  set notes(notes: string) {
    this._notes = notes;
  }

}
