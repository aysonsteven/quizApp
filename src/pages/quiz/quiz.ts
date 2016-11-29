import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { FinalPage } from '../final/final';
import { Post} from "../../fireframe2/post";
import { QuizService } from '../../providers/quiz-service';


interface quizData{
  title?:string;
  content?:string;
  extra_1:string;
  extra_2?:string;
  extra_3?:string;
  extra_4?:string;
  extra_5?:string;
  extra_6?:number;
  extra_7?:string;
  extra_8?:string;
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

  body = {};
  url:string = 'http://xbase.esy.es/';
  errorCheck;
  quizAnswer:number;
  ctr:number = 0;
  ctrRandom:number = 0;
  loader:boolean = true;
  questionID;
  questions = [];
  currentQ :quizData = <quizData>{};
  Questions = [];
  total:number;
  playerUsername: string;
  score: number = 0;

  constructor(
    private navCtrl: NavController,
    private question: Post,
    private navPar: NavParams,
    private alrtCtrl: AlertController,
    private toastCtrl: ToastController,
    private quizSrvc: QuizService
    ) {
    this.playerUsername = this.navPar.get('player');
    this.displayQuestions();
    
    
    // this.currentQ = this.questions[this.ctrRandom]; 
  }

  displayQuestions() {
    this.body = {
      'mc': 'post.search',
      'options':{
        'cond': "post_id LIKE 'questions'"
      }
    }
    this.quizSrvc.query( this.body, res=>{
      this.questions = res.rows;
      this.Questions = JSON.parse(JSON.stringify(this.questions));
      this.showQuiz();
      this.loader = false;
    },()=>{})

  }

  showQuiz(){
    this.ctrRandom = Math.floor(Math.random() * (this.questions.length - 1 + 1)) + 0
    this.currentQ = this.questions[this.ctrRandom];
    console.log( 'showQuiz() ' ,   this.questions[0]);
  }

  onSubmit(){
    if (this.quizAnswer == null){
      this.errorCheck = { error: 'No answer selected' };
      return;
    }
    if( this.ctr < this.Questions.length-1 ){
      this.ctr+=1;
      console.log( this.currentQ.title );
      // this.quizAnswer = null;
        if(this.quizAnswer == this.currentQ.extra_6) this.score +=2;
        this.randomizedQuestions();
    }
    else{
      console.log("end");

      this.navCtrl.setRoot( FinalPage, {
        playerInfo: [ this.score, this.playerUsername ]
      })
    }
  }
  randomizedQuestions(){
    this.ctrRandom = Math.floor(Math.random() * (this.questions.length - 1 + 1)) + 0;
    this.currentQ = this.questions[this.ctrRandom];
    this.questions.splice(this.ctrRandom, 1);
  }

  onClickEnd(){
      console.log("end");
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
