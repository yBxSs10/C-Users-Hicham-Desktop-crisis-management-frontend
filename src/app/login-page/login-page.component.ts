import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
  imports: [
    FormsModule
  ]
})
export class LoginPageComponent {
  name: string = '';
  email: string = '';
  password: string = '';

  toggleForm(formType: string) {
    const container = document.getElementById('container');
    if (formType === 'signUp') {
      container?.classList.add('right-panel-active');
    } else {
      container?.classList.remove('right-panel-active');
    }
  }

  signUp() {
    console.log('Sign Up:', this.name, this.email, this.password);
  }

  signIn() {
    console.log('Sign In:', this.email, this.password);
  }
}
