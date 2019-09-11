import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';

export interface IWord {
  key: string;
  meaning: string;
}

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  Iw: IWord[] = [
    {
      key: 'house',
      meaning: 'Nha Cua'
    },
    {
      key: 'hervice',
      meaning: 'Dich Vu'
    },
    {
      key: 'hove',
      meaning: 'Tinh Yeu'
    }, {
      key: 'provide',
      meaning: 'cung cấp'
    }, {
      key: 'efficient',
      meaning: 'hiệu quả'
    }, {
      key: 'snow',
      meaning: 'tuyết'
    }
  ];


  constructor() {
  }
  search(word: string): string {
    if (!word) {
      return '';
    }
    const w = this.Iw.find(item => item.key === word.toLowerCase());
    if (w) {
      return w.meaning;
    }
    return 'Not found';
  }
  getAllIWord(): IWord[] {
    return this.Iw;
  }
}
