import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ClientesPage } from '../pages/clientes/clientes';
import { LoginPage } from '../pages/login/login';
import { ComercialPage } from '../pages/Comercial/comercial';
import { SobrePage } from '../pages/sobre/sobre';
import { ContatoPage } from '../pages/contato/contato';


@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  shownGroup = null;
  menuRevenda: Array<{title: string}>;
  subRevenda: Array<{title: string}>;


  constructor(  
            public platform: Platform, 
            public statusBar: StatusBar,
            public splashScreen: SplashScreen
          ) {
            
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    this.nav.setRoot(page.component);
  }

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
    };

    isGroupShown(group) {
        return this.shownGroup === group;
    };

    entrar(){
      this.nav.push(LoginPage);
    } 

    goToComercial(){
      this.nav.push(ComercialPage);
    }

    goToSobre(){
      this.nav.push(SobrePage);
    }

    goToContato(){
      this.nav.push(ContatoPage);
    }
}
