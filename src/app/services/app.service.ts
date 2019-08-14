import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Author} from '../models/author.model';
import {Publication} from '../models/publication.model';
import {ContentPublicationModel} from '../models/content.publication.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private api = 'http://localhost:3000';
  private authorEndPoint = '/authors';

  constructor(private _http: HttpClient) { }

  getAuthors(): Observable<Author[]> {
    const apiURL = `${this.api}${this.authorEndPoint}`;
    return this._http.get<Author[]>((apiURL));
  }

  getPost(param: string): Observable<Publication[]> {
    const apiURL  = `${this.api}${param}`;
    return this._http.get<Publication[]>(apiURL);
  }

}
