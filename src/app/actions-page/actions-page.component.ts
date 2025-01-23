import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-actions-page',
  templateUrl: './actions-page.component.html',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatCardModule],
})
export class ActionsPageComponent {
  actions = ['Action 1', 'Action 2', 'Action 3'];
}
