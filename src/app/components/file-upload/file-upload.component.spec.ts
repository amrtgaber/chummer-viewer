/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { FileUploadModule } from 'ng2-file-upload';
import { FileUploader } from 'ng2-file-upload';

import { CharacterService } from '../../services';

import { FileUploadComponent } from './file-upload.component';

describe('FileUploadComponent', () => {
  let component: FileUploadComponent;
  let fixture: ComponentFixture<FileUploadComponent>;
  let debugElement: DebugElement;
  let element: HTMLElement;

  let characterService: CharacterService;

  /**
   * Attempt file upload
   * @param  {File} file File to upload
   */
  function upload(file: File) {
    component.uploader.addToQueue([file]);
    component.fileUpload();
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FileUploadModule ],
      declarations: [ FileUploadComponent ],
      providers: [ CharacterService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileUploadComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement.query(By.css('input'));
    element = debugElement.nativeElement;

    characterService = TestBed.get(CharacterService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should abort file upload if no files are present', () => {
    let readAsTextSpy = spyOn(component.fileReader, 'readAsText');

    // ensure there are no files present
    expect(component.uploader.queue.length).toBe(0);

    component.fileUpload();
    expect(readAsTextSpy.calls.any()).toBe(false);
  });

  it('should abort file upload if file is not valid', () => {
    let readAsTextSpy = spyOn(component.fileReader, 'readAsText');

    upload(new File([], ''));
    expect(readAsTextSpy.calls.any()).toBe(false);

    upload(new File([''], 'not a chummer file'));
    expect(readAsTextSpy.calls.any()).toBe(false);

    upload(new File([''], 'different extension.txt'));
    expect(readAsTextSpy.calls.any()).toBe(false);

    upload(new File([''], 'doesn\'t end with .chum5 but has it in filename .txt'));
    expect(readAsTextSpy.calls.any()).toBe(false);

    upload(new File([''], '.chum5'));
    expect(readAsTextSpy.calls.any()).toBe(false);
  });

  it('should call readAsText if correct file type is uploaded', () => {
    let readAsTextSpy = spyOn(component.fileReader, 'readAsText');
    upload(new File([], 'simple.chum5'));
    expect(readAsTextSpy.calls.any()).toBe(true);
  });

  it('should update hasFileOverDropZone', () => {
    component.hasFileOverDropZone = false;
    component.fileOverDropZone(true);
    expect(component.hasFileOverDropZone).toBe(true);
  });
});
