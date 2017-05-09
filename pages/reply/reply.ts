import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Reply } from '../../models/reply';

@Component({
  selector: 'page-reply',
  templateUrl: 'reply.html',
})
export class ReplyPage {
  replies: Reply[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.setReplies();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Reply');
  }
  setReplies() {
    this.replies.push(new Reply(0, "assets/img/p1.png", "유저1", "Hi", "21:30"));
    this.replies.push(new Reply(0, "assets/img/p2.png", "유저2", "Lists are used to display rows of information, such as a contact list, playlist, or menu. Or maybe something crazy we don’t even know exists yet!", "21:33"));
    this.replies.push(new Reply(0, "assets/img/p3.png", "유저3", "냐옹", "21:36"));
    this.replies.push(new Reply(0, "assets/img/p4.png", "유저4", "캐츠업", "21:39"));
    this.replies.push(new Reply(0, "assets/img/p5.png", "유저5", "Adding icons to list items is a great way to hint about the contents of each item. The position of the icon can be set using the item-left and item-right attributes. The size of the icon defaults to small, and can be made larger with the large attribute.", "21:30"));
    this.replies.push(new Reply(0, "assets/img/p6.png", "유저6", "안녕하세요", "22:12"));
    this.replies.push(new Reply(0, "assets/img/p7.png", "유저7", "^^!!!", "22:36"));
  }
  clickReply() {

  }
}
