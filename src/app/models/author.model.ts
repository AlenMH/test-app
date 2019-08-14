import {Publication} from './publication.model';

export interface Author {
  name: string;
  lastName: string;
  email: string;
  publications?: Publication[];
}
