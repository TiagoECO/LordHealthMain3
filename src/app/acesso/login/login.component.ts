import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Autenticacao } from 'src/app/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public formulario: FormGroup = new FormGroup({
    'email': new FormControl(null),
    'senha': new FormControl(null)

  })

  constructor(private autenticacao: Autenticacao) {
  }

 @Output() public exibirPainel:EventEmitter <string>= new EventEmitter <string> ();

  ngOnInit(): void {

  }

  public displayRecord(){
    this.exibirPainel.emit('cadastro')
  }

  public authenticator(): void {
   this.autenticacao.authenticator(this.formulario.value.email, btoa(this.formulario.value.senha))
   .then(()=>{

   })
   .catch(err =>console.log(err))
  }
}
