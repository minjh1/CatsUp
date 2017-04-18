import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cat } from '../../models/cat';
import { CatProfilePage } from './detail/detail';

/**
 * Generated class for the Cats page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-cats',
  templateUrl: 'cats.html',
})
export class CatsPage {
  cats : Cat[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cats.push(new Cat('assets/img/cat1.png','까치','나비','순둥이','금오공대','흰 털에 검은무늬'));
    this.cats.push(new Cat('assets/img/cat3.png','냥냥이','노랑이','마요','대구 XX동', '옅은 노랑, 친근함'));
    this.cats.push(new Cat('assets/img/bob.png','Bob','','','London','목도리를 하고있음'));
  }

  getItems(ev){

  }
  openDetailPage(cat){
    this.navCtrl.push(CatProfilePage, {
      cat: cat,
    });
  }

}
