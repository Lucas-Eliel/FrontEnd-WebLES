import { Component } from '@angular/core';
import { NavController, AlertController,LoadingController, ToastController, NavParams } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';

@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
  providers: [
    DadosProvider
  ]
})

export class ProdutosPage {

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
  public produtos: any[] = [];
  public integrates: any[] = [];
  public tamanhoTotalArray:number;
  public totais: any[] = [];
  public dadosIntegrate:any;
  public idProduto:string;
  public nomeBase:string;
  public ip:string;
  public porta:string;
  public usuarioBanco:string;
  public senhaBanco:string;



  constructor(
    public navCtrl: NavController,
    private dadosProvider: DadosProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {

    let idProduto = navParams.get('idProduto');

    this.dadosProvider.getListaLicenca(idProduto).subscribe(
      (data) => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.arrayAuxiliar = objeto_retorno.licenca;
        this.tamanhoArray = this.arrayAuxiliar.length;
        if(this.tamanhoArray > 1){
          this.items = objeto_retorno.licenca;
        }else{
          this.items = [objeto_retorno.licenca];
        }
        console.log(this.items);
        console.log(this.arrayAuxiliar.length);
      },
      error => {
        console.log(error);
      })


      this.dadosProvider.getProdutoSelecionado(idProduto).subscribe(
        (data) => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.arrayAuxiliar = objeto_retorno.produtos;
          this.tamanhoArray = this.arrayAuxiliar.length;
          if(this.tamanhoArray > 1){
            this.produtos = objeto_retorno.produtos;
          }else{
            this.produtos = [objeto_retorno.produtos];
          }
          console.log(this.produtos);
    
        },
        error => {
          console.log(error);
        })



      this.dadosProvider.getListaIntegrate(idProduto).subscribe(
        (data) => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.arrayAuxiliar = objeto_retorno.integrate;
          this.tamanhoArray = this.arrayAuxiliar.length;
          if(this.tamanhoArray > 1){
            this.integrates = objeto_retorno.integrate;
          }else{
            this.integrates = [objeto_retorno.integrate];
          }
          console.log(this.integrates);
    
        },
        error => {
          console.log(error);
        })
      
    
  }


    gravarIntegrate(idProduto:string){

      this.dadosIntegrate = {
        "idProduto": idProduto,
        "nomeBase": this.nomeBase,
        "ip": this.ip,
        "porta": this.porta,
        "usuarioBanco": this.usuarioBanco,
        "senhaBanco": this.senhaBanco
      };

      this.dadosProvider.setGravarIntegrate(this.dadosIntegrate);
      this.navCtrl.pop();
    }


}
