import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Platform } from 'ionic-angular';


@Injectable()
export class DadosProvider {

  url = "http://lessistemas.com.br/APISITELES/dados";
   
  constructor(
          public http: Http
  ) {
    console.log('Hello DadosRequestProvider Provider');
  }


  /* ---------- @GET ---------- */

  getLogin(usuario:string,senha:string){
    return this.http.get(this.url + "/validaUsuario/"+usuario+"/"+senha);
  }

  getListaNumLancamentos(){
    return this.http.get(this.url + "/listarNumLancamentos");
  }

  getListaLicenca(idProduto:string){
    return this.http.get(this.url + "/listarLicenca/"+idProduto);
  }

  getListaUsuario(nome:string){
    return this.http.get(this.url + "/listarUsuario/"+nome);
  }

  getListaIntegrate(idProduto:string){
    return this.http.get(this.url + "/listarIntegrate/"+idProduto);
  }

  getListaProdutos(idUsuario:string){
    return this.http.get(this.url + "/listarProdutos/"+idUsuario);
  }

  getProdutoSelecionado(idProduto:string){
    return this.http.get(this.url + "/listarProdutoSelecionado/"+idProduto);
  }
  
  getListaTodosProdutos(){
    return this.http.get(this.url + "/listarProdutos");
  }

  getListaFinanceiro(idUsuario:string){
    return this.http.get(this.url + "/listarFinanceiro/"+idUsuario);
  }

  getListaAdministrativo(idUsuario:string){
    return this.http.get(this.url + "/listarAdm/"+idUsuario);
  }

  getListaLancamentos(comanda:string){
    return this.http.get(this.url + "/listarLancamentos/"+comanda);
  }

  getTotalLancamentos(comanda:string){
    return this.http.get(this.url + "/listarTotalLancamentos/"+comanda);
  }

  getUltimoNumeroComanda(){
    return this.http.get(this.url + "/ultimoNumeroComanda");
  }

  getItem(ean:string){
    return this.http.get(this.url + "/listarItem/"+ean);
  }

  

  /* --------- @POST ---------- */

  setGravarIntegrate(dadosIntegrate:any){
    let headers = new Headers();
        headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers : headers});

    console.log(dadosIntegrate);
    this.http.post(this.url + "/gravarIntegrate",dadosIntegrate,options)
             .map(res => { res.json() })
             .subscribe(data => console.log(data));
  }




  /* --------- @DELETE ---------- */

  setExcluirLancamento(numLancamento:string){
    let headers = new Headers();
        headers.append('Content-Type','application/json');

    let options = new RequestOptions({headers : headers});

    console.log(numLancamento);
    this.http.delete(this.url + "/excluiVenda/"+numLancamento+"",options)
             .map(res => { res.json() })
             .subscribe(data => console.log(data));
  }

}
