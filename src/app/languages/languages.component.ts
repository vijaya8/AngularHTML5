import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from 'ilb-portal';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: Language[];

  constructor(private language: LanguageService) {
  }

  ngOnInit() {
    this.language.getLanguages().subscribe((langResult: Language[]) => {
      this.languages = langResult;
      console.log('this.languages', this.languages);
    });
  }

}
