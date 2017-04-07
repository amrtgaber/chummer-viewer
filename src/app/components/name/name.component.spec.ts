/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { CharacterService } from '../../services';

import { NameComponent } from './name.component';

describe('NameComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;
  let debugElement: DebugElement;

  let characterService: CharacterService;

  beforeEach(async(() => {
    interface CharacterName {
      name: string;
      alias: string;
    }

    const characterServiceStub = {
      parsedSource: new Subject<CharacterName>(),
      characterData$: null
    };

    characterServiceStub.characterData$ = characterServiceStub.parsedSource.asObservable();

    TestBed.configureTestingModule({
      declarations: [ NameComponent ],
      providers: [ { provide: CharacterService, useValue: characterServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameComponent);
    component = fixture.componentInstance;

    characterService = TestBed.get(CharacterService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update the name correctly', () => {
    let aliasElement = fixture.debugElement.query(By.css('.alias')).nativeElement;
    let nameElement = fixture.debugElement.query(By.css('.name')).nativeElement;
    fixture.detectChanges();

    // starts with empty alias and name
    expect(component.alias).toBe('');
    expect(component.name).toBe('');

    expect(aliasElement.textContent).toMatch(/\s*/);
    expect(nameElement.textContent).toMatch(/\s*/);

    // emit character data
    let testCharacter = { name: 'Test Name', alias: 'Test Alias' };
    characterService.parsedSource.next(testCharacter);
    fixture.detectChanges();

    // update alias and name
    expect(component.alias).toBe(testCharacter.alias);
    expect(component.name).toBe(testCharacter.name);

    expect(aliasElement.textContent).toContain(testCharacter.alias);
    expect(nameElement.textContent).toContain(testCharacter.name);
  });
});
