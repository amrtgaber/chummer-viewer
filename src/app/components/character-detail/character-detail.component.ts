import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  private _age = '';
  private _background = '';
  private _concept = '';
  private _description = '';
  private _eyes = '';
  private _hair = '';
  private _height = '';
  private _notes = '';
  private _sex = '';
  private _skin = '';
  private _weight = '';

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.characterData$.subscribe( character => {
      this.age = character.age;
      this.background = character.background;
      this.concept = character.concept;
      this.description = character.description;
      this.eyes = character.eyes;
      this.hair = character.hair;
      this.height = character.height;
      this.notes = character.notes;
      this.sex = character.sex;
      this.skin = character.skin;
      this.weight = character.weight;
    });
  }

  get age() {
    return this._age;
  }

  set age(age: string) {
    this._age = age;
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

  get description() {
    return this._description;
  }

  set description(description: string) {
    this._description = description;
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

  get height() {
    return this._height;
  }

  set height(height: string) {
    this._height = height;
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

  get skin() {
    return this._skin;
  }

  set skin(skin: string) {
    this._skin = skin;
  }

  get weight() {
    return this._weight;
  }

  set weight(weight: string) {
    this._weight = weight;
  }
}
