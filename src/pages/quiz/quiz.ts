import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FinalPage } from '../final/final';
import {Post} from "../../fireframe2/post";
import * as _ from 'lodash'

let data = {
  key: '',
  value:{
    question:'',
    choice1:'',
    choice2:'',
    choice3:'',
    choice4:'',
    answer:1
  }
}
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
  errorCheck;
  quizAnswer:number;
  ctr:number = 0;
  ctrRandom:number = 0;
  loader:boolean;
  questionID;
  contents;
  questions = [];
  currentQ = data;
  Questions = [];
  total:number;
  playerUsername: string;
  score: number = 0;

  constructor(
    private navCtrl: NavController,
    private question: Post,
    private navPar: NavParams,
    private alrtCtrl: AlertController,
    private toastCtrl: ToastController
    ) {
    this.playerUsername = this.navPar.get('player');
    this.getQuestions();
    
    // this.currentQ = this.questions[this.ctrRandom]; 
  }

  displayQuestions(data?) {

      for( let key of Object.keys(data).reverse() ) {
        this.questions.push ( {key: key, value: data[key]} );
        // this.searchedItem.push( {key: key, value: data[key]} );
         this.Questions = JSON.parse(JSON.stringify(this.questions));
      }

  }

  showQuiz(){
    this.ctrRandom = Math.floor(Math.random() * (this.questions.length - 1 + 1)) + 0
    this.currentQ = this.questions[this.ctrRandom];
    console.log( this.currentQ.value.question );
  }

  onSubmit(){
    if (this.quizAnswer == null){
      this.errorCheck = { error: 'No answer selected' };
      return;
    }

    if( this.ctr < this.Questions.length-1 ){
      this.ctr+=1;
      this.questions.splice(this.ctrRandom, 1);
      this.ctrRandom = Math.floor(Math.random() * (this.questions.length - 1 + 1)) + 0;
      this.currentQ = this.questions[this.ctrRandom];
      console.log( this.currentQ.value.question );
      // this.quizAnswer = null;
        if(this.quizAnswer == this.currentQ.value.answer){
          console.log('correct')
          this.score +=2;
        }
        else console.log('wrong', this.currentQ.value.answer);
    }
    else{
      console.log("end");
      this.navCtrl.pop();
      this.navCtrl.setRoot( FinalPage, {
        playerInfo: [this.score, this.playerUsername]
      })
    }

  }

  getQuestions( infinite? ) {
    this.loader = true;
    this.question.path = 'question'
    this.question
        .gets( data => {
          if ( ! _.isEmpty(data) ) {
            this.displayQuestions( data ); 
            this.loader=false; 
            this.showQuiz();
          }
        },
        e => {
          console.log( e );
        });
  }
  onClickEnd(){
      console.log("end");
      this.navCtrl.pop();
      this.navCtrl.setRoot( FinalPage, {
        playerInfo: [this.score, this.playerUsername]
      })
  }

  selectedChoice(val){
    console.log('selected answer' + val);
    this.quizAnswer = val;
  }


  ionViewDidLoad() {
    console.log('Hello QuizPage Page');
  }

}
