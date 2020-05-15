import { Component, ViewChild   } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { LesstorePage } from '../lesstore/lesstore';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('mySlider') mySlider: any;

  produtos =  [
             {
               "img": "assets/imgs/lesstore.png"
             },
             {
               "img": "assets/imgs/lespdv.png"
             }
           ]


  clientes =  [
            {
              "img": "assets/clientes/multitec/logo/multitec.png"
            },
            {
              "img": "assets/clientes/agrodel/logo/agrodel.jpg"
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

     goToEntrar(){
       this.navCtrl.push(LoginPage);
     } 

}