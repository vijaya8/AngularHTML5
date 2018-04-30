import {Component, OnInit} from '@angular/core';
import {Language, LanguageService} from 'ilb-portal';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  languages: Language[];
  dataSource: Language[];
  displayedColumns = ['image', 'langName', 'spaekers', 'rNeeds'];


  constructor(private language: LanguageService) {
  }

  ngOnInit() {
    this.language.getLanguages().subscribe((langResult: Language[]) => {
      this.languages = langResult;
      this.dataSource = this.languages;
      console.log('this.languages', this.languages);
    });
  }

}
