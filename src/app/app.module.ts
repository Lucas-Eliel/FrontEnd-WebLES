import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { ClientesPage } from '../pages/clientes/clientes';
import { CadUsuariosPage } from '../pages/cadUsuarios/cadUsuarios';
import { DadosProvider } from '../providers/dados/dados';
import { ProdutosPage } from '../pages/produtos/produtos';
import { ComercialPage } from '../pages/Comercial/comercial';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';
import { LesstorePage } from '../pages/lesstore/lesstore';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    ClientesPage,
    CadUsuariosPage,
    ProdutosPage,
    ComercialPage,
    SobrePage,
    ContatoPage,
    LesstorePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    ClientesPage,
    CadUsuariosPage,
    ProdutosPage,
    ComercialPage,
    SobrePage,
    ContatoPage,
    LesstorePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DadosProvider
  ]
})
export class AppModule {}
