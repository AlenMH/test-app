import {ContentPublicationModel} from './content.publication.model';

export interface Publication {
  id?: number;
  author?: string;
  title?: string;
  subtitle?: string;
  description?: string;
  content?: ContentPublicationModel;
  date?: number;
}
