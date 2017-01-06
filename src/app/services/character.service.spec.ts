/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { Xml2JsonService } from './xml2json.service';

describe('Xml2jsonService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xml2jsonService]
    });
  });

  it('should ...', inject([Xml2jsonService], (service: Xml2jsonService) => {
    expect(service).toBeTruthy();
  }));
});
