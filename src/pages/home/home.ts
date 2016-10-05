import { Component } from '@angular/core';
import { Game } from '../game/game';

import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  playerName:string;

  constructor(public navCtrl: NavController, private modalCTRL: ModalController, private alrtCTRL: AlertController) {
    
  }

  onClickProceed(){
    if (this.playerName == "" || this.playerName == null){
      let msgAlert = this.alrtCTRL.create({
        title: 'No name',
        subTitle: 'Player name required',
        buttons: ['Ok']
      });
      msgAlert.present();
    }

    else{
      this.navCtrl.push(Game, {
        myString: this.playerName
      });
    }
    
  }

}
