import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { QuizPage } from '../quiz/quiz';
import { Post } from '../../fireframe2/post';
import { HomePage } from '../home/home';
import { QuizService } from '../../providers/quiz-service';




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
  

  body = {};
  postConf = {
    id:'highscores',
    name: "players' highscores"
  }

  constructor(
    private navCtrl: NavController, 
    private navPar: NavParams, 
    private platform: Platform,
    private post: Post,
    private quizSrvc: QuizService
    ) {
    this.createPostConfig();
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
  createPostConfig(){
    this.body = {
      'mc': 'post_config.create',
      'id': this.postConf.id,
      'name': this.postConf.name
    }
    this.quizSrvc.query( this.body, res=>{
      console.log( res )
    }, e=>{

    })
  }
  onClickChange(){
    this.navCtrl.setRoot( HomePage );
  }

  postHighscore(){
    ////formatting time : hours, minutes, AMPM
    let hrs = this.today.getHours() == 0 ? "12" : this.today.getHours() > 12 ? this.today.getHours() - 12 : this.today.getHours();
    let mins = (this.today.getMinutes() < 10 ? "0" : "") + this.today.getMinutes();
    let ampm = this.today.getHours() < 12 ? "AM" : "PM";
    let formattedTime = hrs + ":" + mins + " " + ampm 

    this.body = {
      'post_id': this.postConf.id,
      'title': this.playerName,
      'content': this.playerScore,
      'extra_1': formattedTime
    }
    this.quizSrvc.post( this.body , s=>{
      console.log( 'Stats Posted(): ', s )
    },(e)=>{
      console.error( 'error posting(): ', e )
    })
  }
}
