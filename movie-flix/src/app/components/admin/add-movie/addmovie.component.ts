import {Component, OnInit} from '@angular/core';
import {FormCollectionService} from '../../../service/form-collection.service';
import {Movie} from '../../../models/movie';
import {Observable} from 'rxjs';
import {HttpEvent, HttpEventType} from '@angular/common/http';
import {AdminutilsService} from '../../../service/adminutils.service';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.scss']
})
export class AddmovieComponent implements OnInit {

  genereInputList: Array<string> | undefined;
  languageInputList: Array<string> | undefined;

  // file
  uploadedFileList: FileList | undefined ;
  progressInfos: any = [];
  uploadMessage: string | undefined;
  message = '';
  fileInfos: Observable<any> | undefined;

  movieModel = new Movie('', '', new Date(), [], '', [], [], [], '', '', '', []);

  constructor(private  formcollectionservice: FormCollectionService, private  adminutilsService: AdminutilsService) {
    formcollectionservice.getAllList().subscribe(
            res => {this.genereInputList = res.generes; this.languageInputList = res.languages; },
            err => console.log(err)
    );
    }

  ngOnInit(): void {
    this.fileInfos = this.adminutilsService.getFiles();
  }

  selectFiles( event: any ): void {
      this.progressInfos = [];
      let isImage = true;
      const files = event.target.files;

      for (let i = 0; i < files.length; i++){
        console.log(files[i]);
        if (files.item(i).type.match('image.*')){
           continue;
         }
         else{
           isImage = false;
           alert('invalid format image');
           break;
         }
      }


      if (isImage) {
        this. uploadedFileList = event.target.files;
        console.log(this.uploadedFileList);
      } else {
        this. uploadedFileList = undefined;
        event.srcElement.percentage = null;
      }

    }

    uploadFiles(id: string): void {
      this.message = '';
      if (this.uploadedFileList != null) {
        for (let i = 0; i < this.uploadedFileList.length; i++) {
          this.upload(i, this.uploadedFileList[i], id);
        }
      }
    }
    upload(idx: number, file: File, id: string): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };
    this.adminutilsService.upload(file, id).subscribe((event: HttpEvent<any>) => {
      switch (event.type) {
        case HttpEventType.Sent:
          console.log('Request has been made');
          break;
        case HttpEventType.ResponseHeader:
          console.log('Response header has been received!');
          break;
        case HttpEventType.UploadProgress:
           this.progressInfos[idx].percentage =  Math.round(100 * event.loaded / (event?.total || 1));
           console.log(`Uploaded! ${this.progressInfos[idx].percentage}%`);
           break;
        case HttpEventType.Response:
            console.log('Uploaded', event.body);
            setTimeout(() => {
                  this.uploadMessage = 'Movie Added';
                  // @ts-ignore
                  document.getElementById('loader').style.display = 'none';
              //  this.progressInfos[idx].percentage = 100;
            }, 1500);
      }
    });



    }

  onSubmit(): void {
    this.uploadMessage = '';
     // @ts-ignore
    document.getElementById('loader').style.display = 'block';
    console.log(this.movieModel.releaseDate)
    this.adminutilsService.addmovie(this.movieModel).subscribe(
      res =>  {
        console.log(res._id);
        this.uploadFiles(res._id);
      } ,
      err => this.uploadMessage = 'Movie name already taken'
    );

  }


  valuedividerProducer(value: any): void{
    this.movieModel.producers = value.control.value.split(',');
  }
  valuedividerCaste(value: any): void{
    this.movieModel.castelist = value.control.value.split(',');
  }
  valuedividerDirector(value: any): void{
    this.movieModel.directors = value.control.value.split(',');
  }








}
