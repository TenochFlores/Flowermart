import { AuthenticationService } from '../_service/authentication.service';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs/operators';
import { faKey, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { LoginResponse } from '../_model/login-response';
import { Subscription, switchMap, of } from 'rxjs';
import { SwalMessages } from '../../commons/_dto/swal-messages';
import { Usuario } from '../_model/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent implements OnInit {

  swal: SwalMessages = new SwalMessages(); // Swal messages

  usernameIcon = faUserSecret;
  passwordIcon = faKey;
  
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  }, [Validators.required])

  public showLoading: boolean;
  private subscriptions: Subscription[] = [];    
  
  constructor(private authenticationService: AuthenticationService) {
    this.showLoading = false;
  }
  
  ngOnInit(): void { }
  
  public onLogin(): void {

    this.showLoading = true;      
    var loginFormValue  = this.loginForm.value;
    var usuario: Usuario = new Usuario();
    usuario.username = loginFormValue['username'];
    usuario.password = loginFormValue['password'];
    
    this.subscriptions.push(
      of(null).pipe(
        delay(1000),
        switchMap(() => this.authenticationService.login(usuario))
      ).subscribe(
        (response: HttpResponse<LoginResponse>) => {
          if(response.body  === null || response.body.token === null) {
            console.log('La respuesta no devuelve el contenido esperado')
            return;
          }

          const token = response.body.token;
          this.authenticationService.saveToken(token);
          if(response.body === null) {
            console.log('La API no devolvió cuerpo en la respuesta');
            return;
          }

          this.authenticationService.addUserToLocalCache(response.body);
          this.showLoading = false;
          window.location.reload();
        },
        (errorResponse: HttpErrorResponse) => {
          this.swal.errorMessage(errorResponse.error.message);
          this.showLoading = false;
        }
      )
    );
  }
  
  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  get fg() {
    return this.loginForm.controls;
  }
}