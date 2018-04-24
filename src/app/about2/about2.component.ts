import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about2',
  templateUrl: './about2.component.html',
  styleUrls: ['./about2.component.scss']
})
export class About2Component implements OnInit {

  constructor() {
  }

  showResult() {
    const x = document.forms['myform']['newinput'].value;
    document.forms['myform']['result'].value = x;
  }

  ngOnInit() {
  }

}
