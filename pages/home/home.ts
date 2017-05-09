import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Feed } from '../../models/feed';
import { ReplyPage } from '../reply/reply';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  feeds : Feed[] = [];
  constructor(public navCtrl: NavController) {
    this.feeds.push(new Feed("assets/img/bob.png","assets/img/james.jpg","Bob","James","1시간 전","High-five!",5));
    this.feeds.push(new Feed("assets/img/cat1.png","assets/img/james.jpg","까치","유저1","2시간 전","Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.", 7));
    }

  openReplyPage(feed){
    this.navCtrl.push(ReplyPage, {
      feed: feed,
    });
  }
}
