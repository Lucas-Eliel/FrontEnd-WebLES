import { Component } from '@angular/core';
import { NavController, AlertController,LoadingController, ToastController, NavParams } from 'ionic-angular';
import { DadosProvider } from '../../providers/dados/dados';
import { ProdutosPage } from '../produtos/produtos';
import { HomePage } from '../home/home';
import { AppModule } from '../../app/app.module';
import { LesstorePage } from '../lesstore/lesstore';

@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html'
})

export class ClientesPage {

  searchQuery: string = '';
  editarUsuario;
  imageURI:any;
  imageFileName:any;
  public cabecalhos:any[] =[];
  public produtos:any[] =[];
  public financeiros:any[] =[];
  public adms:any[] =[];
  public arrayAuxiliar:any[] =[];
  public tamanhoArray:number;
  public jsonString:string;
  public numero:string;
  public arrayTotalAuxiliar: any[] = [];
  public tamanhoTotalArray:number;
  public totais: any[] = [];
  public viewAbaProduto: any = 'ocultarMenu';
  public viewAbaFinanceiro: any = 'ocultarMenu';
  public viewAbaAdministracao: any = 'ocultarMenu';

  constructor(
    public navCtrl: NavController,
    private dadosProvider: DadosProvider,
    public alertCtrl: AlertController,
    public navParams: NavParams
  ) {

    let nomeCliente = navParams.get('nomeCliente');
    
      this.dadosProvider.getListaUsuario(nomeCliente).subscribe(
        (data) => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.arrayAuxiliar = objeto_retorno.usuario;
          this.tamanhoArray = this.arrayAuxiliar.length;
          if(this.tamanhoArray > 1){
            this.cabecalhos = objeto_retorno.usuario;
          }else{
            this.cabecalhos = [objeto_retorno.usuario];
          }
          console.log(this.cabecalhos);
    
        },
        error => {
          console.log(error);
        })
    }


  goToProduto(idProduto:string){
    this.navCtrl.push(ProdutosPage,{idProduto:idProduto});
  }

  goToStore(){
    this.navCtrl.push(LesstorePage);
  }

  goViewAbaProduto(idUsuario:string){
    this.viewAbaProduto = '';
    this.viewAbaFinanceiro = 'ocultarMenu';
    this.viewAbaAdministracao = 'ocultarMenu';
    this.getListaProdutos(idUsuario);
  }

  goViewAbaFinanceiro(idUsuario:string){
    this.viewAbaProduto = 'ocultarMenu';
    this.viewAbaFinanceiro = '';
    this.viewAbaAdministracao = 'ocultarMenu';
    this.getListaFinanceiro(idUsuario);
  }

  goViewAbaAdministracao(idUsuario:string){
    this.viewAbaProduto = 'ocultarMenu';
    this.viewAbaFinanceiro = 'ocultarMenu';
    this.viewAbaAdministracao = '';
    this.getListaAdministrativo(idUsuario);
  }

  goToHome(){
    this.navCtrl.pop();
  }



  getListaProdutos(idUsuario:string){

    this.dadosProvider.getListaProdutos(idUsuario).subscribe(
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
  }



  getListaFinanceiro(idUsuario:string){

    this.dadosProvider.getListaFinanceiro(idUsuario).subscribe(
      (data) => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.arrayAuxiliar = objeto_retorno.financeiro;
        this.tamanhoArray = this.arrayAuxiliar.length;
        if(this.tamanhoArray > 1){
          this.financeiros = objeto_retorno.financeiro;
        }else{
          this.financeiros = [objeto_retorno.financeiro];
        }
        console.log(this.financeiros);
  
      },
      error => {
        console.log(error);
      })
  }

  
  getListaAdministrativo(idUsuario:string){

    this.dadosProvider.getListaAdministrativo(idUsuario).subscribe(
      (data) => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.arrayAuxiliar = objeto_retorno.adm;
        this.tamanhoArray = this.arrayAuxiliar.length;
        if(this.tamanhoArray > 1){
          this.adms = objeto_retorno.adm;
        }else{
          this.adms = [objeto_retorno.adm];
        }
        console.log(this.adms);
  
      },
      error => {
        console.log(error);
      })
  }

  
}
