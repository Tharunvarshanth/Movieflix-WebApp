import { Component, OnInit } from '@angular/core';
import {SharingService} from '../../../service/sharing.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../store/app.states';
import {HomeMovieService} from '../../../service/home-movie.service';
import {User} from '../../../models/user';
import {Movie} from '../../../models/movie';
import {ActivatedRoute} from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-home-movie-detail',
  templateUrl: './home-movie-detail.component.html',
  styleUrls: ['./home-movie-detail.component.scss']
})
export class HomeMovieDetailComponent implements OnInit {

  movieModel = new Movie('', '', new  Date(), '', [], '', [], [], [], '', '', '', []);
  videoUrl: any ;

  constructor(private router: ActivatedRoute, private homemovieservice: HomeMovieService, private sanitizer: DomSanitizer){

  const moviename = this.router.snapshot.paramMap.get('movieName');
  this.homemovieservice.loadmoviebymoviename(moviename).subscribe(
    res => {
      console.log(res);
      const movie = res;
      this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(movie.videourl);
      this.movieModel = movie;
    },
err => console.log(err)
    );

  }







  ngOnInit(): void {



  }

}
