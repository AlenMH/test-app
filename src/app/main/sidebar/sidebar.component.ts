import {Component, Host, Input} from '@angular/core';
import {AppComponent} from '../../app.component';
import {Author} from '../../models/author.model';
import {Publication} from '../../models/publication.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  @Input('author') authors: Author[];
  @Input() publications;

  constructor(@Host() private _app: AppComponent) {
  }

  getTitles(param) {
    this._app.displayAll = true;
    this._app.currentAuthor = param;

    for (const author of this.authors) {
      for (const publication of this._app.publications) {
        author.publications = this._app.publications.filter(pub => pub.author === author.email);
      }
    }

    this.publications = this._app.publications.filter(publication => publication.author === param);
    this._app.pubFiltered = this.publications;
    const enumerableLength = Object.keys(this.publications).length;
    this._app.updatePaginator(0, enumerableLength, '');
  }

  getAllPosts() {
    this._app.currentAuthor = undefined;
    this._app.displayAll = true;
    this._app.sortPosts(this._app.currentAuthor, 'desc');
    this._app.pubFiltered = this._app.publications;
    const enumerableLength = Object.keys(this._app.pubFiltered).length;
    this._app.updatePaginator(0, enumerableLength, 'all');
  }

  getPost(param) {
    this._app.displayAll = false;
    this.publications = this._app.publications.filter(publication => publication.title === param);
    const currentID = this.publications.find((elem) => {
      return elem.id;
    });

    this._app.pubFiltered = this.publications;
    this._app.currentIdPub = currentID.id;

  }
}
