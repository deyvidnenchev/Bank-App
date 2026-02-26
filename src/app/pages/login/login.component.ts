import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import { IgxInputGroupModule, IgxButtonModule, IgxCheckboxComponent, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterLink, NgIf, IgxInputGroupModule, IgxButtonModule, IgxCheckboxComponent, IgxIconModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  rememberMe = false;
  showMfa = false;
  mfaCode = '';
  showPassword = false;

  onLogin() {
    if (this.email && this.password) {
      this.showMfa = true;
    }
  }

  onMfaSubmit() {
    // MFA verified - would navigate to dashboard
    alert('Login successful! Redirecting to dashboard...');
  }
}
