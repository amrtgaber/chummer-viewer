/* tslint:disable:no-unused-variable */
import { TestBed, async } from '@angular/core/testing';
import { FileUploadModule } from 'ng2-file-upload';

import { CharacterService } from './services';
import { AppComponent } from './app.component';

import {
  CharacterDetailComponent,
  FileUploadComponent,
  NameComponent,
  NavbarComponent
} from './components';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        CharacterDetailComponent,
        FileUploadComponent,
        NameComponent,
        NavbarComponent
      ],
      imports: [
        FileUploadModule
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
