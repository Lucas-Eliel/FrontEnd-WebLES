import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { DadosProvider } from '../../providers/dados/dados';
import { ClientesPage } from '../clientes/clientes';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [
    DadosProvider
  ]
})
export class LoginPage {

  public login = new Array<any>();
  public usuario: string;
  public senha: string;
  public items:any[] =[];
  public arrayAuxiliar:any[] =[];
  public tamanhoArray:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dadosProvider: DadosProvider,
    public alertCtrl: AlertController,
  ) {
  }

  analisaAcesso() {
    this.dadosProvider.getLogin(this.usuario,this.senha).subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        if(objeto_retorno.login[0].status == "true"){
          this.showAlertTrue()
        }else{
          this.showAlertFalse();
        }
        console.log(objeto_retorno.login[0].status);
      },
      error => {
        console.log(error);
      }
    )
  }
  
  showAlertTrue() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Bem vindo!',
      buttons: ['OK']
    });
    alert.present();
    this.goToMenu(this.usuario);
  }

  showAlertFalse() {
    let alert = this.alertCtrl.create({
      title: 'Login',
      subTitle: 'Usuário e senha incorretos!',
      buttons: ['OK']
    });
    alert.present();
  }

  goToMenu(nomeCliente:string){
    this.navCtrl.push(ClientesPage,{nomeCliente : nomeCliente});
  }

}


