/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CharacterService } from './character.service';
import { Spy } from 'jasmine-core';

describe('CharacterService', () => {
  let characterService: CharacterService;
  let spy: Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CharacterService]
    });

    characterService = TestBed.get(CharacterService);
    spy = spyOn(characterService.parsedSource, 'next');
  });

  it('should ...', inject([CharacterService], (service: CharacterService) => {
    expect(service).toBeTruthy();
  }));

  it('should not emit character data on parse error', () => {
    characterService.processCharacterData({ message: 'parsing error' }, {});
    expect(characterService.character).toBeFalsy();
    expect(spy.calls.any()).toBe(false);
  });

  it('should emit character data on parse success', () => {
    characterService.processCharacterData(null, { character: 'character data' });
    expect(characterService.character).toBe('character data');
    expect(spy.calls.any()).toBe(true);
  })
});
