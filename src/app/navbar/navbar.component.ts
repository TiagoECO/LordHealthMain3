import { Component, OnInit } from '@angular/core';
import { Autenticacao } from '../autenticacao.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private autenticacao:Autenticacao) { }

  ngOnInit() {
  }

  public sair(): void {
    this.autenticacao.sair();
  }
}
