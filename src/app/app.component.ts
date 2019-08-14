import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from './services/app.service';
import {Subscription} from 'rxjs';
import {Author} from './models/author.model';
import {Publication} from './models/publication.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  title = 'technology publications';
  publicationEndpoint = '/publications?_sort=date&_order='; // path of get all posts
  assetsPath = '../assets'; // changeTo '/test-app/assets' for production or '../assets' to develop
  authors: Author[];
  publications: Publication[];
  pubFiltered: Publication[];
  currentIdPub: number; // id of current publication
  currentAuthor: string; // id of current author id = email
  dataAuthor: any; // info of current author
  displayAll = true; // boolean to change publication's view, of current to all
  sortOrder = 'desc';
  pageSize = 10; // number of display publications for page
  leftVal: number;
  rightVal: number;
  pageTotal: number;

  constructor(private _appService: AppService) {
  }

  ngOnInit() {
    this.getAuthors();
    this.getPosts(this.publicationEndpoint, this.sortOrder);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  getAuthors() {
    this.subscription = this._appService.getAuthors()
      .subscribe(data => this.authors = data,
        error => {
          console.error(error);
        });
  }

  getPosts(param, option) {
    this.subscription = this._appService.getPost(`${param}${option}`)
      .subscribe(data => {
          this.publications = data,
            this.pubFiltered = data,
            this.updatePaginator(0, Object.keys(data).length, 'all');
        },
        error => {
          console.error(error);
        });
  }

  getAuthor(identified: string) {
    this.dataAuthor = this.authors.find(author => author.email === identified);
    return this.dataAuthor.name + ' ' + this.dataAuthor.lastName;
  }

  goToMainPage() {
    this.displayAll = true;
    this.getPosts(this.publicationEndpoint, 'desc');
  }

  sortPosts(param, option) {
    param = (param === undefined) ? this.publicationEndpoint : `/publications?author=${param}&_sort=date&_order=`;
    this.subscription = this._appService.getPost(`${param}${option}`)
      .subscribe(data => {
          this.pubFiltered = data;
        },
        error => {
          console.error(error);
        });
  }

  updatePaginator(left: number, rigth: number, option: string) {
    switch (option) {
      case 'next':
        this.leftVal = (left >= rigth) ? rigth - this.pageSize : left;
        this.rightVal = (left >= rigth) ? rigth : left + this.pageSize;
        this.leftVal = (this.leftVal < 0) ? 0 : this.leftVal;
        break;
      case 'prev':
        this.leftVal = (this.leftVal >= 0) ? left - this.pageSize : 0;
        this.rightVal = (this.leftVal >= 0) ? left : rigth;
        this.leftVal = (this.leftVal < 0) ? 0 : this.leftVal;
        break;
      case 'last':
        this.leftVal = (left > this.pageSize) ? left : 0;
        this.rightVal = rigth;
        break;
      case  'first':
        this.leftVal = left;
        this.rightVal = (this.rightVal >= rigth) ? rigth : this.pageSize;
        this.rightVal = (this.pageTotal > this.pageSize) ? this.pageSize : this.rightVal;
        break;
      case 'all':
        this.pageTotal = rigth;
        this.leftVal = left;
        this.rightVal = (this.rightVal >= rigth) ? rigth : this.pageSize;
        break;
      default:
        this.pageTotal = rigth;
        this.leftVal = left;
        this.rightVal = rigth;
        this.rightVal = (this.rightVal >= rigth) ? rigth : this.pageSize;
        break;
    }
  }

}
