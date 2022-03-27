import { Component, Input } from '@angular/core';
import { Upload,UploadService } from '@state';

@Component({
  selector: 'sweeper-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss']
})
export class UploadDetailsComponent {
  @Input() fileUpload?:Upload;
  constructor(private uploadService:UploadService) { }
  deleteFileUpload(file?:Upload): void {file?this.uploadService.deleteFile(file):null;}
}