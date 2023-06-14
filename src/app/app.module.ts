import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ReactiveFormsModule } from '@angular/forms';
import { Autenticacao } from './autenticacao.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcessoComponent } from './acesso/acesso.component';

import { LoginComponent } from './acesso/login/login.component';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import { HomeComponent } from './home/home.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { AuthGuard } from './aut-guard.service';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductsComponent } from './products/products.component';
import { ExercicioCardComponent } from './acesso/cards/exercicio-card/exercicio-card.component';
import { MeditacaoCardComponent } from './acesso/cards/meditacao-card/meditacao-card.component';
import { SonoCardComponent } from './acesso/cards/sono-card/sono-card.component';
import { ExerciciosComponent } from './home/exercicios/exercicios.component';
import { SonoComponent } from './home/sono/sono.component';
import { MeditacaoComponent } from './home/meditacao/meditacao.component';

@NgModule({
  declarations: [
    AppComponent,
    AcessoComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    ProdutosComponent,
      NavbarComponent,
      ProductsComponent,
      ExercicioCardComponent,
      MeditacaoCardComponent,
      SonoCardComponent,
      ExerciciosComponent,
      SonoComponent,
      MeditacaoComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [Autenticacao, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
