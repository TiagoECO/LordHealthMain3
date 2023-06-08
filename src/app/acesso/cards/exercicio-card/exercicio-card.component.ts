import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exercicio-card',
  templateUrl: './exercicio-card.component.html',
  styleUrls: ['./exercicio-card.component.css']
})
export class ExercicioCardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  redirectToOtherPage() {
    this.router.navigate(['/exercicios']);
  }

}
