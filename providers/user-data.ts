import { Injectable } from '@angular/core';

import { Events } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@Injectable()
export class UserData {

  constructor(
    public events: Events,
    public storage: Storage
  ) {}

  login(username: string): void {
    this.storage.set('hasLoggedIn', true);
    this.setUsername(username);
  //  this.events.publish('user:login');
  };

  signup(username: string): void {
    this.storage.set('hasLoggedIn', true);
    this.setUsername(username);
//    this.events.publish('user:signup');
  };
/*
  logout(): void {
    this.storage.remove('hasLoggedIn');
    this.storage.remove('username');
    this.events.publish('user:logout');
  };
*/
  setUsername(username: string): void {
    this.storage.set('username', username);
  };

  getUsername(): Promise<string> {
    return this.storage.get('username').then((value) => {
      return value;
    });
  };

  hasLoggedIn(): Promise<boolean> {
    return this.storage.get('hasLoggedIn').then((value) => {
      return value === true;
    });
  };

  checkHasSeenTutorial(): Promise<string> {
    return this.storage.get('hasSeenTutorial').then((value) => {
      return value;
    });
  };
}
