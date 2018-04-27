import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  firtsName: string;
  lastName: string;
  email: string;
  dateOfBirth: any;
  pswd: string;

  constructor(private router: Router) {
  }

  signUp() {
    const user = {
      fname: this.firtsName,
      lname: this.lastName,
      email: this.email,
      dob: this.dateOfBirth,
      pswd: this.pswd,
    }
    if (user.fname !== undefined && user.lname !== undefined) {
      this.router.navigate(['']);
    } else {
      alert('please fill the form');
    }
  }

  ngOnInit() {

  }

}
