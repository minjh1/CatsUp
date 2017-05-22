import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  loginInfo :
  {
    email?:string,
    password?:string,
  } = {};

  submitted=false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  
  }

  dismiss(){
    this.viewCtrl.dismiss() //페이지 끔
  }

  Login(form: NgForm){
    this.submitted=true;
    if(form.valid){

    }
  }

}
