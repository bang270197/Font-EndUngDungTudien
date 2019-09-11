import {Component, OnInit} from '@angular/core';
import {DictionaryService, IWord} from '../dictionary.service';

@Component({
  selector: 'app-dictionary-page',
  templateUrl: './dictionary-page.component.html',
  styleUrls: ['./dictionary-page.component.css']
})
export class DictionaryPageComponent implements OnInit {
  Iword: IWord[];
  getAllDictionary() {
    this.Iword = this.dictionary.getAllIWord();
  }
  constructor(private dictionary: DictionaryService) {
  }
  ngOnInit() {
    this.getAllDictionary();
  }

}
