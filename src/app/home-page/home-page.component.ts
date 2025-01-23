import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatCard} from '@angular/material/card';
import {MatButton} from '@angular/material/button';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [
    MatCard,
    MatButton
  ]
})
export class HomePageComponent {
  constructor(private router: Router) {}

  navigateToSignalement(caseType: number) {
    this.router.navigate(['/signalement'], { queryParams: { case: caseType } });
  }
}
