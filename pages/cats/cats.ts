import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Cat } from '../../models/cat';
import { CatProfilePage } from './detail/detail';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
    let headers=new Headers();
    headers.append('Content-Type', 'application/json');
    let body={
      limit: 3,
      offset: 0,
    }
    http.post('http://45.249.160.73:5555/getCatList', JSON.stringify(body), {headers: headers})
      .map(res => res.json())
      .subscribe(data => {
        console.log("성공"+data);

      }, error => {
        console.log(JSON.stringify(error.json()));
      })
  /*
    this.cats.push(new Cat('assets/img/cat1.png','까치','나비','순둥이','금오공대','흰 털에 검은무늬'));
    this.cats.push(new Cat('assets/img/cat3.png','냥냥이','노랑이','마요','대구 XX동', '옅은 노랑, 친근함'));
    this.cats.push(new Cat('assets/img/bob.png','Bob','','','London','목도리를 하고있음'));
    */
  }

  getItems(ev){

  }
  openDetailPage(cat){
    this.navCtrl.push(CatProfilePage, {
      cat: cat,
    });
  }
  doInfinite(infiniteScroll) {
   console.log('Begin async operation');
/*
   setTimeout(() => {
     for (let i = 0; i < 30; i++) {
       this.items.push( this.items.length );
     }

     console.log('Async operation has ended');
     infiniteScroll.complete();
   }, 500);
   */
 }


}
