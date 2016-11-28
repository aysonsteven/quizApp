import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz'
import { FinalPage } from '../pages/final/final';
import { FireModule } from '../fireframe2/fire-module';
import { QuizService } from '../providers/quiz-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage,
    FinalPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage,
    FinalPage
  ],
  providers: [ QuizService ]
})
export class AppModule {}
