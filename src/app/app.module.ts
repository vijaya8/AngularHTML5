import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {FooterComponent} from './footer/footer.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {About2Component} from './about2/about2.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {Home1Component} from './home1/home1.component';
import {
  AuthenticationStorageService,
  BrowserService,
  GoogleAnalyticsService,
  LanguageService,
  LogService,
  SisenseApiService,
  StorageService
} from 'ilb-portal';
import {LanguagesComponent} from './languages/languages.component';

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
  },
  {
    path: 'home',
    component: Home1Component
  },
  {
    path: 'languages',
    component: LanguagesComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    LoginComponent,
    About2Component,
    Home1Component,
    LanguagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatCardModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    LanguageService,
    SisenseApiService,
    AuthenticationStorageService,
    StorageService,
    BrowserService,
    LogService,
    GoogleAnalyticsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
