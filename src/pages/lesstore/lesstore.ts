import { Component } from '@angular/core';
import { NavController, AlertController,LoadingController, ToastController } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';

@Component({
  selector: 'page-lesstore',
  templateUrl: 'lesstore.html',
  providers: [
    DadosProvider
  ]
})

export class LesstorePage {

  searchQuery: string = '';
  editarUsuario;
  imageURI:any;
  imageFileName:any;
  public items:any[] =[];
  public arrayAuxiliar:any[] =[];
  public tamanhoArray:number;
  public jsonString:string;
  public numero:string;
  public arrayTotalAuxiliar: any[] = [];
  public tamanhoTotalArray:number;
  public totais: any[] = [];

  constructor(
    public navCtrl: NavController,
    private dadosProvider: DadosProvider,
    public alertCtrl: AlertController
  ) {

    

    this.dadosProvider.getListaTodosProdutos().subscribe(
      (data) => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.arrayAuxiliar = objeto_retorno.produtos;
        this.tamanhoArray = this.arrayAuxiliar.length;
        if(this.tamanhoArray > 1){
          this.items = objeto_retorno.produtos;
        }else{
          this.items = [objeto_retorno.produtos];
        }
        console.log(this.items);
        console.log(this.arrayAuxiliar.length);
  
      },
      error => {
        console.log(error);
      })
  }
}
