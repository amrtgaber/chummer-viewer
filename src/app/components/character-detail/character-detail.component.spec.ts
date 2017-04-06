/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CharacterService } from '../../services';

import { CharacterDetailComponent } from './character-detail.component';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  let characterService: CharacterService;

  beforeEach(async(() => {
    interface CharacterDetail {
      age: string;
      background: string;
      concept: string;
      description: string;
      eyes: string;
      hair: string;
      height: string;
      notes: string;
      sex: string;
      skin: string;
      weight: string;
    }

    const characterServiceStub = {
      parsedSource: new Subject<CharacterDetail>(),
      characterData$: null
    };

    characterServiceStub.characterData$ = characterServiceStub.parsedSource.asObservable();

    TestBed.configureTestingModule({
      declarations: [ CharacterDetailComponent ],
      providers: [ { provide: CharacterService, useValue: characterServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;

    characterService = TestBed.get(CharacterService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update character detail correctly', () => {
    expect(component.age).toBe('');
    expect(component.background).toBe('');
    expect(component.concept).toBe('');
    expect(component.description).toBe('');
    expect(component.eyes).toBe('');
    expect(component.hair).toBe('');
    expect(component.height).toBe('');
    expect(component.notes).toBe('');
    expect(component.sex).toBe('');
    expect(component.skin).toBe('');
    expect(component.weight).toBe('');

    let testCharacter = {
      age: '42',
      background: 'test background',
      concept: 'test concept',
      description: 'test description',
      eyes: 'blue',
      hair: 'black',
      height: '6 foot 4 inches',
      notes: 'test note',
      sex: 'attack helicopter',
      skin: 'taupe',
      weight: '17 kilograms',
    };
    characterService.parsedSource.next(testCharacter);

    expect(component.age).toBe(testCharacter.age);
    expect(component.background).toBe(testCharacter.background);
    expect(component.concept).toBe(testCharacter.concept);
    expect(component.description).toBe(testCharacter.description);
    expect(component.eyes).toBe(testCharacter.eyes);
    expect(component.hair).toBe(testCharacter.hair);
    expect(component.height).toBe(testCharacter.height);
    expect(component.notes).toBe(testCharacter.notes);
    expect(component.sex).toBe(testCharacter.sex);
    expect(component.skin).toBe(testCharacter.skin);
    expect(component.weight).toBe(testCharacter.weight);
  });
});
