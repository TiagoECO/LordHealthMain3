import { MeditacaoComponent } from './home/meditacao/meditacao.component';
import { SonoComponent } from './home/sono/sono.component';
import { ExerciciosComponent } from './home/exercicios/exercicios.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './acesso/cadastro/cadastro.component';
import {AcessoComponent} from './acesso/acesso.component'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './acesso/login/login.component';
import { ProdutosComponent } from './home/produtos/produtos.component';
import { AuthGuard } from './aut-guard.service';

const routes: Routes = [
  {path: '', component:AcessoComponent},
  {path: 'cadastro', component: CadastroComponent},
  // {path:'home', component: HomeComponent},
  {path: 'home', component:HomeComponent, canActivate:[AuthGuard]},//bloqueio de rotas
  {path: 'login', component:LoginComponent},
  {path: 'produtos', component:ProdutosComponent},
  {path: 'exercicios', component:ExerciciosComponent},
  {path: 'sono', component:SonoComponent},
  {path: 'meditacao', component:MeditacaoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
