import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { Usuario } from '../usuario.model';
import { Autenticacao } from 'src/app/autenticacao.service';
//import * as bcrypt from 'bcrypt';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  //atributo contralador dos inputs no HTML
  forms: FormGroup = new FormGroup({

    'email': new FormControl(null),
    'nome_completo': new FormControl(null),
    'telefone': new FormControl(null),
    'cpf': new FormControl(null),
    'nome_usuario': new FormControl(null),
    'senha': new FormControl(null)

  })


  // instanciando o serviço de autenticação
  constructor(private autenticacao: Autenticacao) {

  }

  ngOnInit(): void {

  }

  // serve para disparar eventos para o component pai
  @Output() public exibirpainel: EventEmitter<string> = new EventEmitter<string>()

  public exibirlogin(): void {
    this.exibirpainel.emit('login')
  }

  // função acionada no click e que serve para enviar os dados ao serviço, seguindo a lógica do model
  CadastrarUsuario(): void {
    // alert('Funcionando')

    //const senhaCriptografada = bcrypt.hashSync(this.formulario.value.senha, 10);

    let usuario: Usuario = new Usuario
      (this.forms.value.email,
        this.forms.value.nome_completo,
        this.forms.value.telefone,
        this.forms.value.cpf,
        this.forms.value.nome_usuario,
        btoa(this.forms.value.senha)
      )

    if (this.forms.value.email == null || this.forms.value.nome_completo == null ||
      this.forms.value.senha == null || this.forms.value.telefone == null ||
      this.forms.value.cpf == null || this.forms.value.nome_usuario == null) {

        alert ('Preencha todos os campos')

    }
    else{
      this.autenticacao.CadastrarUser(usuario)
      .then(() => {
        this.exibirlogin()
      })
      .catch(err => console.log(err));

    }



  }



}
