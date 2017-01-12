/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CharacterService } from '../../services';

import { NameComponent } from './name.component';

describe('NameComponent', () => {
  let component: NameComponent;
  let fixture: ComponentFixture<NameComponent>;
  let debugElement: DebugElement;

  let characterService: CharacterService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameComponent ],
      providers: [ CharacterService ]
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
    // @TODO: mock characterData$ observable
  });
});
