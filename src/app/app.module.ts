import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Game } from '../pages/game/game';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Game
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Game
  ],
  providers: []
})
export class AppModule {}
