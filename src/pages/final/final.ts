import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { Post } from '../../fireframe2/post';





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
    today = new Date();
    dd = this.today.getDate();
    mm = this.today.getMonth()+1; //January is 0!
    yyyy = this.today.getFullYear();

  playerInfo;
  playerName:string;
  playerScore:number;

  constructor(
    private navCtrl: NavController, 
    private navPar: NavParams, 
    private platform: Platform,
    private post: Post
    ) {
    this.playerInfo = this.navPar.get('playerInfo');

    this.playerName = this.playerInfo[1]
    this.playerScore = this.playerInfo[0]
    this.platform = platform;

    this.postHighscore();
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

  postHighscore(){
    let hrs = this.today.getHours() == 0 ? "12" : this.today.getHours() > 12 ? this.today.getHours() - 12 : this.today.getHours();
    let mins = (this.today.getMinutes() < 10 ? "0" : "") + this.today.getMinutes();
    let ampm = this.today.getHours() < 12 ? "AM" : "PM";
    let formattedTime = hrs + ":" + mins + " " + ampm 
    this.post.path = 'Quiz logs'
    this.post
      .set( 'Player Name: ', this.playerName )
      .set( 'Player Score', this.playerScore.toString() )
      .set( 'Date', this.today.getMonth() + 1 + '/' + this.today.getDate()  +  '/' + this.today.getFullYear() )
      .set( 'Time' , formattedTime )
      .create( ()=> {
        console.log( formattedTime );
        // console.log(this.player.score)
      },e=>{
        console.error( 'errorLOG:: (): ' + e )
      })
  }
}
