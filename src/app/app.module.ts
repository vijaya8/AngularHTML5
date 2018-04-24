import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {About2Component} from './about2/about2.component';
import {MatIconModule} from '@angular/material/icon';

const routes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: About2Component
  },
  {
    path: 'login',
    component: LoginComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    About2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
