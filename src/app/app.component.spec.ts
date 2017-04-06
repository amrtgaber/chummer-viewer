/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';

import { CharacterService } from './services';

import { AppComponent } from './app.component';

import {
  FileUploadComponent,
  NameComponent,
  CharacterDetailComponent
} from './components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        FileUploadComponent,
        NameComponent,
        CharacterDetailComponent
      ],
      providers: [
        CharacterService
      ]
    });

    TestBed.compileComponents();
  }));

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
