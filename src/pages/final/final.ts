import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';


@Component({
  selector: 'page-final',
  templateUrl: 'final.html'
})
export class Final {
  
  mainString;

  finalScore;
  pName;

  constructor(public navCtrl: NavController, private navPar: NavParams, private navP: NavParams, private alrtCTRL: AlertController) {
    this.mainString = this.navPar.get('myString');
    this.pName = this.mainString[1];
    this.finalScore = this.mainString[0]
  }

  ionViewDidLoad() {
    console.log('Hello Final Page');
  }

  tryAgain(){
    let tryAgainALRT = this.alrtCTRL.create({
      title: 'Want another try?',
      subTitle: 'Do you want to try again?',
      buttons: [{
        text: 'Yes',
        handler: ()=>{
          let alrtTryagain = this.alrtCTRL.create({
            title: 'Restarting quiz',
            subTitle: 'You are about to play again.',
            buttons:[{
              text: 'Ok',
              handler: ()=>{
                console.log('restart function')
              }
            }]
          })
          alrtTryagain.present();
        }
      },{
        text: 'No',
        handler: ()=>{
          console.log('Try again canceled')
        }
      }]
    })
    tryAgainALRT.present();
  }
  quitGame(){
    let quitAlrt = this.alrtCTRL.create({
      title: 'Are you sure?',
      subTitle: 'Are you sure you want to quit?',
      buttons: [{
        text: 'Yes',
        handler:()=>{
          let alrtQuit = this.alrtCTRL.create({
            title:'Quiting',
            subTitle: 'Returning to main screen',
            buttons: [{
              text: 'ok',
              handler:()=>{
                this.navCtrl.pop();
              }
            }]
          })
          alrtQuit.present();
        }
      },
      {
        text: 'No',
        handler: ()=>{
          console.log('canceled quit')
        }
      }]
    })
    quitAlrt.present();
  }

}
