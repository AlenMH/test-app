import {Component, Host, Input} from '@angular/core';
import {AppComponent} from '../../app.component';
import {Publication} from '../../models/publication.model';

@Component({
  selector: 'app-publications-view',
  templateUrl: './publications-view.component.html',
  styleUrls: ['./publications-view.component.scss']
})
export class PublicationsViewComponent {
  @Input('data') publications: Publication[];
  currentPost: Publication; // object for catch current publication
  sort: boolean; // boolean for alternate sort type
  typeSort: string; // text asc or desc
  leftIconSort = 'arrow_upward';
  rightIconSort = 'arrow_downward';

  constructor(@Host() public _app: AppComponent) {
  }

  getCurrentId(id: number) {
    this._app.currentIdPub = id;
    this.getPost(id);
  }

  getPost(id) {
    this._app.displayAll = false;
    this.currentPost = this.publications.find((publication) => {
      return publication.id == id;
    });
  }

  changePostsView() {
    this._app.displayAll = true;
    this._app.sortPosts(this._app.currentAuthor, this._app.sortOrder);
    this._app.pubFiltered = this.publications;
  }

  changeSort() {
    this.sort = !this.sort;
    this.typeSort = (this.sort) ? 'asc' : 'desc';
    this.leftIconSort = (this.leftIconSort === 'arrow_upward') ? 'arrow_downward' : 'arrow_upward';
    this.rightIconSort = (this.rightIconSort === 'arrow_downward') ? 'arrow_upward' : 'arrow_downward';
    this._app.sortOrder = this.typeSort;
    this._app.sortPosts(this._app.currentAuthor, this.typeSort);
  }

  firstPage(option: string) {
    const enumerableLength = Object.keys(this.publications).length;
    this._app.updatePaginator(0, enumerableLength, option);
  }

  nextPage(option: string) {
    const enumerableLength = Object.keys(this.publications).length;
    this._app.updatePaginator(this._app.rightVal, enumerableLength, option);
  }

  prevPage(option: string) {
    this._app.updatePaginator(this._app.leftVal, this._app.rightVal, option);
  }

  lastPage(option: string) {
    const enumerableLength = Object.keys(this.publications).length;
    this._app.updatePaginator(enumerableLength - this._app.pageSize, enumerableLength, option);
  }
}
