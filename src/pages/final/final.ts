import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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

  constructor(private navCtrl: NavController, private navPar: NavParams) {
    this.playerInfo = this.navPar.get('playerInfo');
    this.playerName = this.playerInfo[1];
    this.finalScore = this.playerInfo[0];
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
    console.log('quit::()')
  }

}
