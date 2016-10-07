import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Game } from '../pages/game/game';
import { Final } from '../pages/final/final';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Game,
    Final
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Game,
    Final
  ],
  providers: []
})
export class AppModule {}
