import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { NewsPage } from '../pages/news/news';
import { WritePage } from '../pages/write/write';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { MyPage } from '../pages/mypage/mypage';
import { CatsPage } from '../pages/cats/cats';
import { CatProfilePage } from '../pages/cats/detail/detail';
import { AddCat } from '../pages/cats/add-cat/add-cat';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from "@angular/http";

//import { Cat } from '../models/cat';

@NgModule({
  declarations: [
    MyApp,
    NewsPage,
    WritePage,
    HomePage,
    TabsPage,
    MyPage,
    CatsPage,
    CatProfilePage,
    AddCat,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    NewsPage,
    WritePage,
    HomePage,
    TabsPage,
    MyPage,
    CatsPage,
    CatProfilePage,
    AddCat,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
