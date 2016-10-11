import { Component } from '@angular/core';
import { QuestionsService } from '../../providers/questions.service';
import { QuestionType } from '../../providers/questions';
import { questionsList } from '../../providers/questions-list';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { Http } from '@angular/http';
import { Final } from '../final/final';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
  providers: [ QuestionsService ]
})
export class Game {

  answerIndex:number;
  
  quizAnswer;

  currentQ:QuestionType;

  qQuestions;

  ctr:number = 0;
  ctrRandom:number = 0;
  playerUsername: string;
  playerScore: number = 0;
  constructor(private nav: NavController, private navCtrl: NavController, private navPar: NavParams, private http: Http, private quizSRV: QuestionsService, private alrtCTRL: AlertController) {
    this.playerUsername = this.navPar.get('myString');
    this.qQuestions = questionsList

    this.ctrRandom = Math.floor(Math.random() * (this.qQuestions.length - 1 + 1)) + 0

    this.currentQ = questionsList[this.ctrRandom]; 
   
  }
  onSelectRadio(i){
    
    this.quizAnswer = i;
  }

 next(){

   if (this.quizAnswer == null){
     let noanswerAlrt = this.alrtCTRL.create({
       title: 'No answer selected',
       subTitle: 'Please choose your answer!',
       buttons: ['Ok']
     });
     noanswerAlrt.present();
   }else{

      if(this.quizAnswer == this.currentQ.answer){
      console.log("Correct");
      this.playerScore += 2;
      if( this.ctr < this.qQuestions.length-1 ){

      this.ctr += 1;
      this.currentQ = this.qQuestions[this.ctr];
      this.quizAnswer = null;
      
    }
    else{
      console.log("end");
      let endAlrt = this.alrtCTRL.create({
        title: 'Finished!',
        subTitle: "You've finished all the questions",
        buttons: [{
          text: 'ok',
          handler: () =>{
            this.navCtrl.pop();
            this.navCtrl.push(Final, {
              myString: [this.playerScore, this.playerUsername],
              
            })
          }
        }]
      });
      endAlrt.present();
    }
      
    }else{
      console.log(this.quizAnswer, "is wrong");
      let alrtIncorrect = this.alrtCTRL.create({
        title: 'Incorrect',
        subTitle: 'Your answer is incorrect.',
        buttons: ['Ok']
      })
      if( this.ctr < this.qQuestions.length-1 ){

      this.ctr += 1;
      this.currentQ = this.qQuestions[this.ctr];
      this.quizAnswer = null;
      
    }else{
      console.log("end");
      let endAlrt = this.alrtCTRL.create({
        title: 'Finished!',
        subTitle: "You've finished all the questions",
        buttons: [{
          text: 'ok',
          handler: () =>{
            this.navCtrl.pop();
            this.navCtrl.push(Final, {
              myString: [this.playerScore, this.playerUsername],
              
            })
          }
        }]
      });
      endAlrt.present();
    }



    }


    }

}

  quitGame(){
    let quitConfirm = this.alrtCTRL.create({
      title: 'Are you sure?',
      message: 'Are you sure you want to quit?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.navCtrl.pop();
            this.navCtrl.push(Final,{
              myString: [ this.playerScore, this.playerUsername ]
            });
          }
        },
        {
          text: 'No',
          handler: () => {
            console.log('No clicked');
          }
        }
      ]
    });

    quitConfirm.present();
  }
  }