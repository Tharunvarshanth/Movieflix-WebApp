import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HomeMovieService} from '../../../service/home-movie.service';
import {SharingService} from '../../../service/sharing.service';
import {Observable, of} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Router} from '@angular/router';
import {DatascienceService} from '../../../service/datascience.service';

// const url = 'https://api.themoviedb.org/3/movie/550?api_key=3b25418775f72f058ed81e0649f41aea';

@Component({
  selector: 'app-tmdb',
  templateUrl: './tmdb.component.html',
  styleUrls: ['./tmdb.component.scss', '../../shared/spinner.scss']
})
export class TmdbComponent implements OnInit {

  likedmovielist: Array<any> = [];

  recommendedmoviesinfo: Array<any> = [];
  closeResult = '';
  templist: Array<any> = [];

  list = [{
    img: 'assets/iS9dkNm.jpg'
    },
    {img: 'assets/iS9dkNm.jpg'}];



  // tslint:disable-next-line:max-line-length
  constructor( private http: HttpClient, private homemovieservice: HomeMovieService, private shareService: SharingService, private router: Router, private  datascience: DatascienceService) {

  }

  ngOnInit(): void {
    const username = this.shareService.getUserSettings().username;
    this.homemovieservice.getusermoviestmdbid(username).subscribe(
      res => {
        this.loadDataMovies(res);
        this.getRecommendedMovies(res);
      },
      err => {
        console.log(err);
      }
    );
  }

  getRecommendedMovies(data: []): void{
         this.datascience.getrecommendedmoviesbylikes(data).subscribe(
           val => {
             this.loadRecommendedMoviesData((val.results));

           },
           res => console.log(res)
           );


  }
  loadRecommendedMoviesData(recommendedmovies: any): void{
    // tslint:disable-next-line:radix
     for (let i = 0; i < parseInt(String(recommendedmovies.length * (1 / 4))) ; i++){

          this.fetchfromApi(recommendedmovies[i].tmdbId).subscribe(
         res => this.recommendedmoviesinfo.push(res),
         err => console.log(err)
       );
     }
  }

  loadDataMovies(data: []): void{

    for ( let i = 0 ; i < data.length ; i++) {
         this.fetchfromApi(data[i]).subscribe(
           res => this.likedmovielist.push(res),
           err => console.log(err)
         );
    }
    setTimeout(() => {

      this.removeSpin();
    }, 3000);
  }

  fetchfromApi(like: any): Observable<any>{
       return this.http.get(`https://api.themoviedb.org/3/movie/${like}?api_key=3b25418775f72f058ed81e0649f41aea`);
  }

  removeSpin(): void{
    // @ts-ignore
    document.getElementById('loader').style.display = 'none';
    // @ts-ignore
    document.getElementById('body-tmdb').style.display = 'block';
  }

  photoclicked(moviedata: any): void{
    this.router.navigate(['movieflix/home/tmdb/home/', moviedata.id]);
    console.log(moviedata);
  }



}
