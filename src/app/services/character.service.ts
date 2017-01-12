import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { parseString } from 'xml2js';
import { Character } from '../interfaces';

@Injectable()
export class CharacterService {
  private _character: Character;
  private _parsedSource = new Subject<Character>();
  public characterData$ = this._parsedSource.asObservable();

  parseXml(xml: string) {
    parseString(xml, { explicitArray: false }, (err, json) => {
      console.log(json.character);
      this._parsedSource.next(json.character);
    });
  }

  get character() {
    return this._character;
  }

  set character(character) {
    this._character = character;
  }

  get parsedSource() {
    return this._parsedSource;
  }
}
