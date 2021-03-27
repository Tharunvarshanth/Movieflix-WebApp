import { Component, OnInit } from '@angular/core';
import {AdminutilsService} from '../../../service/adminutils.service';
import {Movie} from '../../../models/movie';
import {ActivatedRoute, Router} from '@angular/router';
import {FormCollectionService} from '../../../service/form-collection.service';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.scss']
})
export class MoviedetailComponent implements OnInit {

  movieModel = new Movie('', '', new  Date(), [], '', [], [], [], '', '', '', []);
  genereInputList: Array<string> | undefined;
  languageInputList: Array<string> | undefined;


  // tslint:disable-next-line:max-line-length
  constructor(private  formcollectionservice: FormCollectionService, private adminutilsService: AdminutilsService, private router: ActivatedRoute) {
    formcollectionservice.getAllList().subscribe(
      res => {this.genereInputList = res.generes; this.languageInputList = res.languages; },
      err => console.log(err)
    );

    const moviename = this.router.snapshot.paramMap.get('movieName');
    this.adminutilsService.loadmoviebymoviename(moviename).subscribe(
      res => {
        console.log(res);
        const movie = res;
        this.movieModel = movie;
      },
      err => console.log(err)
    );
  }

  ngOnInit(): void {

  }

  onEdit(): void{
    console.log(this.movieModel);
  }
  Remove(id: string): void{
    console.log(id);
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
