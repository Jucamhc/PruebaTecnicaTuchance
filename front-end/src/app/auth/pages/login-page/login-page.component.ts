import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login-page',
  standalone: false,
  templateUrl: './login-page.component.html',
  styles: ``
})
export class LoginPageComponent {

  loginForm!: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  onLogin(): void {
    this.authService.login('pruebaTecnica@tuchance.com', '12345679')
      .subscribe(user => {
        this.router.navigate(['/'])
      })
  }

  onRegister() {
    this.authService.register().subscribe({
      next: (response) => {
        if (response.message === 'Usuario creado') {
          this.snackBar.open('✅ Usuario creado. Ahora puede iniciar sesión.', 'Cerrar', {
            duration: 4000,
            panelClass: ['snackbar-success']
          });
        }
      },
      error: (error) => {
        if (error.status === 501 && error.error.detalle?.msg === 'El usuario ya exite') {
          this.snackBar.open('⚠️ El usuario ya existe. Por favor, inicie sesión.', 'Cerrar', {
            duration: 4000,
            panelClass: ['snackbar-warning']
          });
        } else {
          this.snackBar.open('❌ Ocurrió un error inesperado. Intente de nuevo.', 'Cerrar', {
            duration: 4000,
            panelClass: ['snackbar-error']
          });
        }
      }
    });


  }
}
