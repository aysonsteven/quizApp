import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Post} from "../../fireframe2/post";

/*
  Generated class for the Quiz page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html'
})
export class QuizPage {
  ctr:number = 0;
  questionID;
  contents;

  playerUsername: string;
  playerScore: number = 0;

  constructor(
    private navCtrl: NavController,
    private question: Post,
    private navPar: NavParams
    ) {
    this.playerUsername = this.navPar.get('myString');
  }

  showQuestions(){
    this.question.gets( re => {
      if(re){
        this.contents = re;
        console.log(JSON.stringify(re));
    } 
    },e =>{
      console.log(e)
    });
  }
  get questions() {
    if ( this.contents === void 0 ) return [];
    return Object.keys( this.contents );
  }

  ionViewDidLoad() {
    console.log('Hello QuizPage Page');
  }

}
