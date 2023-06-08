import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sono-card',
  templateUrl: './sono-card.component.html',
  styleUrls: ['./sono-card.component.css']
})
export class SonoCardComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  redirectToOtherPage() {
    this.router.navigate(['/sono']);
  }

}
