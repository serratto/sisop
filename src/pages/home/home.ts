import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Constants } from "../../shared/shared";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  consts: Constants;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.consts = new Constants();
  }

  ionViewDidLoad() {

  }
}
