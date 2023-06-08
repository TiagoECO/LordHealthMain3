import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meditacao-card',
  templateUrl: './meditacao-card.component.html',
  styleUrls: ['./meditacao-card.component.css']
})
export class MeditacaoCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectToOtherPage() {
    this.router.navigate(['/meditacao']);
  }

}
