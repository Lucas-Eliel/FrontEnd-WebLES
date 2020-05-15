import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { ClientesPage } from '../clientes/clientes';

@Component({
  selector: 'page-cadUsuarios',
  templateUrl: 'cadUsuarios.html'
})
export class CadUsuariosPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController
  ) {
  }

  acesso(){
    this.navCtrl.push(ClientesPage);
  }

}
