import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services';

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  private _name = '';
  private _alias = '';

  constructor(private _characterService: CharacterService) { }

  ngOnInit() {
    this._characterService.characterData$.subscribe( character => {
      this.name = character.name;
      this.alias = character.alias;
    });
  }

  get name() {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get alias() {
    return this._alias;
  }

  set alias(alias: string) {
    this._alias = alias;
  }

}
