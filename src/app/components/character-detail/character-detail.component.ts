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
  private _sex: string = '';
  private _eyes: string = '';
  private _hair: string = '';
  private _skin: string = '';
  private _age: number = 0;
  private _weight: number = 0;

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.characterData$.subscribe( character => {
      this.description = character.description;
      this.background = character.background;
      this.concept = character.concept;
      this.notes = character.notes;
      this.sex = character.sex;
      this.eyes = character.eyes;
      this.hair = character.hair;
      this.skin = character.skin;
      this.age = character.age;
      this.weight = character.weight;
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

  get sex() {
    return this._sex;
  }

  set sex(sex: string) {
    this._sex = sex;
  }

  get eyes() {
    return this._eyes;
  }

  set eyes(eyes: string) {
    this._eyes = eyes;
  }

  get hair() {
    return this._hair;
  }

  set hair(hair: string) {
    this._hair = hair;
  }

  get skin() {
    return this._hair;
  }

  set skin(skin: string) {
    this._skin = skin;
  }

  get age() {
    return this._age;
  }

  set age(age: number) {
    this._age = age;
  }

  get weight() {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }
}
