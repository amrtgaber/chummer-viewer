/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Spy } from 'jasmine-core';

import { CharacterService } from '../../services';

import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;
  let spy: Spy;

  let characterService: CharacterService;

  beforeEach(async(() => {
    const characterServiceStub = {
      parseXml: function(xml: string) { }
    };

    TestBed.configureTestingModule({
      declarations: [ FileUploadComponent ],
      providers: [ { provide: CharacterService, useValue: characterServiceStub } ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    element = debugElement.nativeElement;

    characterService = TestBed.get(CharacterService);
    spy = spyOn(component.fileReader, 'readAsText');

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should abort file upload if no files are present', () => {
    component.fileUpload(undefined);
    expect(spy.calls.any()).toBe(false);

    component.fileUpload(null);
    expect(spy.calls.any()).toBe(false);

    component.fileUpload({});
    expect(spy.calls.any()).toBe(false);

    component.fileUpload([]);
    expect(spy.calls.any()).toBe(false);
  });

  it('should abort file upload if file is not valid', () => {
    let testFile = new File([''], '');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(false);

    testFile = new File([''], 'not a chummer file');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(false);

    testFile = new File([''], 'different extension.txt');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(false);

    testFile = new File([''], 'doesn\'t end with .chum5 .txt');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(false);

    testFile = new File([''], '.chum5');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(false);
  });

  it('should call readAsText if correct file type is uploaded', () => {
    let testFile = new File([''], 'simple.chum5');
    component.fileUpload([testFile]);
    expect(spy.calls.any()).toBe(true);
  });
});
