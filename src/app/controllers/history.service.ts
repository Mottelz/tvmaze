import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';


@Injectable({
  providedIn: 'root'
})

export class HistoryService {
  db: any;
  constructor() {
    this.db = new PouchDB('TV-history');
    this.db.info().then((info) => {
      console.log(info);
    });
  }
}
