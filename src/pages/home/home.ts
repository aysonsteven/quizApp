import { Component } from '@angular/core';
import { QuizPage } from '../quiz/quiz'
import { NavController, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  errorCheck;

  items;

  playerName:string;

  constructor(
    public navCtrl: NavController,
    private alrtCTRL: AlertController
    ) {


    
  }



    onClickProceed(){
    if (this.playerName == "" || this.playerName == null){
      this.errorCheck={ error: 'Please provide your name'}
    }

    else{
      this.navCtrl.push( QuizPage, {
        player: this.playerName
      });   
      this.playerName = "";
    }
 
  }




}
