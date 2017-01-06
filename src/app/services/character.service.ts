import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { parseString } from 'xml2js';

@Injectable()
export class CharacterService {
  private _parsedSource = new Subject<Object>();
  public characterData$ = this._parsedSource.asObservable();

  parseXml(xml: string) {
    parseString(xml, { explicitArray: false }, (err, json) => {
      console.log(json);
      this._parsedSource.next(json);
    });
  }
}
