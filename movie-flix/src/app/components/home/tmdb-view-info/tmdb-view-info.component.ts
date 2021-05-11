import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-tmdb-view-info',
  templateUrl: './tmdb-view-info.component.html',
  styleUrls: ['./tmdb-view-info.component.scss']
})
export class TmdbViewInfoComponent implements OnInit {

  movidtmdbId: string | null = '';
  movieinfo: any;
  currentRate = 0;

  ngcheckedclass = 'checked';
  constructor(private router: ActivatedRoute, private http: HttpClient) {

  }

  ngOnInit(): void {
       this.movidtmdbId = this.router.snapshot.paramMap.get('tmdbId');
       if (this.movidtmdbId != null) {
      // tslint:disable-next-line:radix
      this.fetchfromApi(parseInt(this.movidtmdbId)).subscribe(
        res => this.movieinfo = res,
        err => console.log(err)
      );
    }
  }


  fetchfromApi(like: any): Observable<any>{
    return this.http.get(`https://api.themoviedb.org/3/movie/${like}?api_key=3b25418775f72f058ed81e0649f41aea`);
  }
}
