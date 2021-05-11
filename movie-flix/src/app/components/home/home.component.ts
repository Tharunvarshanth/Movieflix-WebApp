import { Component, OnInit } from '@angular/core';
import {User} from '../../models/user';
import {SharingService} from '../../service/sharing.service';

import {HomeMovieService} from '../../service/home-movie.service';
import {Movie} from '../../models/movie';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss', '../shared/spinner.scss']
})
export class HomeComponent implements OnInit {

  isAuthenticated: boolean | undefined;
  user: User = new User();
  errorMessage = null;
  genereList: any = null;
  totalmovieList: Array<{genere: string, list: Array<Movie>}> = [];
  slides: any = [[]];

  constructor(private shareservice: SharingService, private homemovieservice: HomeMovieService, private router: Router ){
        this.homemovieservice.getGenereTypes().subscribe(
          res =>  this.setMovie(res),
            err => this.genereList = []
        );
  }


  setMovie(data: any): void{
    this.genereList = data;
    if (this.genereList !== null){
      this.genereList.forEach((value: string) => {
       this.homemovieservice.getMoviesByGenreTypes(value).subscribe(
          res => this.totalmovieList.push({genere: value, list: res}),
          err => console.log(err)
        );
      });
      setTimeout(() => {
        this.removeSpin();
   }, 8000);

    }
  }

  removeSpin(): void{
    // @ts-ignore
    document.getElementById('loader').style.display = 'none';
    // @ts-ignore
    document.getElementById('body-home').style.display = 'block';
  }



  ngOnInit(): void {
    this.isAuthenticated = this.shareservice.isLoggedIn();
    this.user = this.shareservice.getUserSettings();


  }

  onSelect(movieName: string): void{
    console.log(movieName);
    this.router.navigate(['movieflix/home/', movieName]);
  }


}
