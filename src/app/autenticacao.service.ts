import { Usuario } from "./acesso/usuario.model";
import * as firebase from "firebase";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable()
export class Autenticacao {

    public token_id: any
    public exibirMensagemSucesso: boolean = false;
    public exibirMensagemErro: boolean = false;

    constructor(private rotas: Router) {}

    public CadastrarUser(usuario: Usuario): Promise<any> {
        return firebase.auth().createUserWithEmailAndPassword(usuario.email, usuario.senha)
            .then((resposta: any) => {

                firebase.database().ref(`users/${btoa(resposta.email)}`)
                    .push(usuario)
                alert('Usuário cadastrado com sucesso')
                this.rotas.navigate(['/login']);
            })
            .catch((err: Error) => console.log(err))
            .then((resposta: any) => { console.log(resposta) })
    }

    public authenticator(email: string, senha: string): Promise<any> {
      this.exibirMensagemSucesso = false;
      this.exibirMensagemErro = false;
      return firebase
      .auth()
      .signInWithEmailAndPassword(email, senha)
      .then((resposta: any) => {
        this.exibirMensagemSucesso = true;
        setTimeout(() => {
          this.exibirMensagemSucesso = false;
          firebase
            .auth()
            .currentUser?.getIdToken()
            .then((id: string) => {
              this.token_id = id;
              console.log(this.token_id);
              localStorage.setItem('id_token', id);
              this.rotas.navigate(['/home']);
            });
        }, 3000);
      })
      .catch((err: Error) => {
        this.exibirMensagemErro = true;
        console.log(err);
      });
  }

    public async DeletarUsuarioBD(email: string): Promise<any> {
        const deletar = firebase.database().ref(`usuario_detalhe/${btoa(email)}`);
        try {
            await deletar.remove();
            console.log('Dados deletados com sucesso');
        } catch (err) {
            console.log(err);
        }
    }

    public desativarConta(): void {
        firebase.auth().currentUser?.delete()
            .then(() => {
                alert('Conta desativada com sucesso');
               // this.rotas.navigate(['/cadastro']);
            })
            .catch((err: Error) => console.log(err));
    }

    public autenticado() :boolean{
      let ok :boolean = false
      if(localStorage.getItem('id_token')!=null){
          this.token_id = localStorage.getItem('id_token')
          ok =true
      }
      if(this.token_id ===undefined){
          ok = false
          this.rotas.navigate(['/']);
      }
      return ok
  }

    public sair (){
        firebase.auth().signOut()
      .then(() => {
        localStorage.removeItem('id_token')
        this.token_id = undefined
        this.rotas.navigate(['/']);
      })
      .catch((err) => {console.log(err)})
    }
}
