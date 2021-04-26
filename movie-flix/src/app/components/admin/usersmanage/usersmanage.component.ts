import { Component, OnInit } from '@angular/core';
import {AdminutilsService} from '../../../service/adminutils.service';
import {FullDetailsUser} from '../../../models/user';

@Component({
  selector: 'app-usersmanage',
  templateUrl: './usersmanage.component.html',
  styleUrls: ['./usersmanage.component.scss']
})
export class UsersmanageComponent implements OnInit {

  isLoading = false;
  searchtext = '';
  userList: Array<any> | undefined;
  Message = '';

  constructor(private adminutilsService: AdminutilsService) { }

  ngOnInit(): void {
  }

  search(): void {
         console.log(this.searchtext);
         this.adminutilsService.getuserbyemailorusername(this.searchtext).subscribe(
           res => {
             this.userList = res;
             console.log(res);
           },
         err => this.Message = 'Not user found'
         );
  }
  delete(u: any): void{
    console.log(u.id);
    this.adminutilsService.deleteuserbyadmin(u.id).subscribe(
      res => {
        this.Message = 'Deleted';
        console.log(res);
      },
      err => this.Message = 'Not Deleted'
    );
  }
  edit(u: any): void{

  }

}
