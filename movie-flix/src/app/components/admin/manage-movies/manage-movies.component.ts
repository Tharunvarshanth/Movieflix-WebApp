import { Component, OnInit } from '@angular/core';
import {AdminutilsService} from '../../../service/adminutils.service';
import {Movie} from '../../../models/movie';
import {Binary} from '@angular/compiler';
import {Router} from '@angular/router';

@Component({
  selector: 'app-manage-movies',
  templateUrl: './manage-movies.component.html',
  styleUrls: ['./manage-movies.component.scss']
})
export class ManageMoviesComponent implements OnInit {

  constructor(private adminutilsService: AdminutilsService, private router: Router) {
  }

  searchtext = '';
  movieList: Array<Movie> = [];
  isLoading: Boolean = false;

  ngOnInit(): void {
  }

  search(): void {
    this.isLoading = true;
    this.adminutilsService.getmoviesbynameseatch(this.searchtext).subscribe(
      res => {
        this.movieList = res;
        this.isLoading = false;
        console.log(this.movieList);
      },
      err => console.log(err)
    );
  }


  onSelect(movieName: string): void {
    console.log(movieName);
    this.router.navigate(['movieflix/admin/manage-movie', movieName]);
  }




}

