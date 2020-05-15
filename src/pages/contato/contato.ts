import { Component, ViewChild   } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-contato',
  templateUrl: 'contato.html',
})
export class ContatoPage {

  @ViewChild('mySlider') mySlider: any;

  elenco =  [
             {
               "img": "assets/imgs/sobre.png"
             },
             {
               "img": "assets/imgs/sobre.png"
             },
             {
               "img": "assets/imgs/sobre.png"
             }
           ]

     constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public alertCtrl: AlertController
     ){}

     slideNext(){
       this.mySlider.slideNext();
     }

     slidePrev(){
       this.mySlider.slidePrev();
     }

     entrar(){
       this.navCtrl.push(LoginPage);
     } 

     goToEntrar(){
      this.navCtrl.push(LoginPage);
    } 

}