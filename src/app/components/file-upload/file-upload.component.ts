import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
import { CharacterService } from '../../services';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({});
  public hasFileOverDropZone = false;

  private _file: File;
  private _fileReader: FileReader = new FileReader();

  constructor(private _characterService: CharacterService) { }

  get file() {
    return this._file;
  }

  set file(file) {
    this._file = file;
  }

  get fileReader() {
    return this._fileReader;
  }

  /**
   * Do file upload. If successful will update character service.
   */
  fileUpload() {
    // I couldn't find an easier way to upload the file directly to the frontend.
    try {
      this.file = this.uploader.queue.pop()._file;
    } catch (err) {
      console.warn('File failed to upload');
      console.error(err);
      return;
    }

    // very simple check for chummer file type
    if ( !this.file.name.endsWith('.chum5') || this.file.name.length <= '.chum5'.length ) {
      console.error('Not a chummer file');
      return;
    }

    // when reading is complete this will fire event listener "loadend"
    this.fileReader.readAsText(this.file);
  }

  ngOnInit() {
    this.fileReader.addEventListener( 'loadend', () => this._characterService.parseXml(this.fileReader.result) );
  }

  /**
   * Updates a boolean if there is a file over the drop zone. Used for styling.
   * @param  {boolean} hasFileOver Event when item is dragged over drop zone.
   */
  public fileOverDropZone(hasFileOver: boolean) {
    this.hasFileOverDropZone = hasFileOver;
  }
}
