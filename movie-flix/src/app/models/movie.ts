import {Binary} from '@angular/compiler';
import DateTimeFormat = Intl.DateTimeFormat;

export class Movie{
  constructor(
    // tslint:disable-next-line:variable-name
    public _id: string,
    public movieName: string,
    public releaseDate: Date,
    public cost: string,
    public geners: Array<string>,
    public language: string,
    public producers: Array<string>,
    public castelist: Array<string>,
    public directors: Array<string>,
    public runtime: string,
    public  description: string,
    public videourl: string,
    public poster: Array<any>
  ){}

}
interface P{
  name: string;
  type: string;
  picByte: any;

}
