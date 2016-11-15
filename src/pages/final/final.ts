import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';

/*
  Generated class for the Final page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-final',
  templateUrl: 'final.html'
})
export class FinalPage {

  playerInfo;

  finalScore;
  playerName;

  constructor(private navCtrl: NavController, private navPar: NavParams, private platform: Platform) {
    this.playerInfo = this.navPar.get('playerInfo');
    this.playerName = this.playerInfo[1];
    this.finalScore = this.playerInfo[0];
    this.platform = platform;
  }

  ionViewDidLoad() {
    console.log('Hello FinalPage Page');
  }
  tryAgain(){
    this.navCtrl.setRoot( QuizPage, {
      player: this.playerName
    } );
  }

  quitGame(){
    console.log('exit app')
    this.platform.exitApp();
  }

}
