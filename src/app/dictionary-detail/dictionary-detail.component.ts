import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {DictionaryService, IWord} from '../dictionary.service';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-dictionary-detail',
  templateUrl: './dictionary-detail.component.html',
  styleUrls: ['./dictionary-detail.component.css']
})
export class DictionaryDetailComponent implements OnInit, OnDestroy {
  word: IWord;
  sub: Subscription;

  constructor(private activedRoute: ActivatedRoute,
              private dictionservice: DictionaryService
  ) {
  }

  ngOnInit() {
    this.sub = this.activedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const key = paramMap.get('key');
      const meaning = this.dictionservice.search(key);
      this.word = {
        key ,
      meaning
    };
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
