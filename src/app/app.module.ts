import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { QuizPage } from '../pages/quiz/quiz'
import { FireModule } from '../fireframe2/fire-module';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    QuizPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FireModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    QuizPage
  ],
  providers: [  ]
})
export class AppModule {}
