import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialLoginService } from '../../services/social-login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: SocialUser
  loggedIn: boolean

  private isValidNickname = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{7,15}$/
  private isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  private isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/

  registerForm : FormGroup

  constructor( 

    private http: HttpClient,
    private authService:SocialAuthService,
    private socialLoginService:SocialLoginService,
    private router:Router

  ) {
    this.formBuilder()
  }

  ngOnInit(): void {}

  /**
   * Construye e formulario de registro con sus respectivas validaciones
   */
  private formBuilder():void{

    this.registerForm = new FormGroup({

      nickname : new FormControl('', [Validators.required, Validators.pattern(this.isValidNickname)] ),
      email : new FormControl('', [Validators.required, Validators.pattern(this.isValidEmail)] ),
      password : new FormControl('', [Validators.required, Validators.pattern(this.isValidPassword)] ),
      confirm_password : new FormControl('', [Validators.required, Validators.pattern(this.isValidPassword)])

    })

  }

  /**
   * Verifica que el formulario sea válido y realiza la petición
   * @param event Evento disparado al enviar el formulario 'submit'
   */
  register(event : Event){

    event.preventDefault()

    if( this.registerForm.valid && this.validPassword() ){
      console.log("Hola mundo")
      this.http.get('https://my-portfolio.digital')
        .subscribe(data => {
          console.log(data)
          this.redirectToHome()
        })
    }else{
      this.registerForm.markAllAsTouched()
    }

  }

  /**
   * Verifica si el campo es invalido
   * @param field Nombre del form control del formulario
   * @returns true si es inválido, false si es falso
   */
  isInvalidField(field:string) : boolean {

    return ( this.registerForm.get(field).touched || this.registerForm.get(field).dirty )
      && !this.registerForm.get(field).valid

  }

  /**
   * Devuelve el mensaje de validación correspondiente
   * @param field Nombre del form control del formulario
   * @returns Mensaje de validación correspondiente
   */
  getErrorMessage(field:string) : string {

    let message;

    if(this.registerForm.get(field).errors.required){

      switch(field){
        case 'password':
          message = 'La contraseña es requerida.'
          break
        case 'confirm_password':
          message = "Debe confirmar su contraseña."
          break
        default:
          message = `El ${field} es requerido.`
          break
      }

    }else if(this.registerForm.get(field).hasError('pattern')){
      
      switch(field){
        case 'nickname':
          message = `El nombre de usuario debe contener al menos una mayuscula, una minuscula, un numero y ser mayor a 7 y menor a 15 caracteres.`
          break;

        case 'email':
          message = `Ingrese un email válido.`
          break;

        default:
          message = `La contraseña debe contener una mayuscula, una minuscula, un numero, un caracter especial y ser mayor a 8 caracteres.`
          break;
      }

    }

    return message

  }

  /**
   * Verifica que la contraseña se haya confirmado correctamente
   * @returns true en caso de que las contraseñas coincidan
   */
  validPassword() : boolean {
    return this.registerForm.get('password').value == this.registerForm.get('confirm_password').value
  }


  loginWithGoogle():void{
    this.socialLoginService.googleLogin()
      .then(data => {
        console.log(data)
        // this.redirectToHome()
      })
      .catch(error => console.log(error))
  }

  loginWithFacebook():void{
    this.socialLoginService.facebookLogin()
      .then(data => {
        console.log(data)
        this.redirectToHome()
      })
      .catch(error => console.log(error))
  }

  redirectToHome():void{
    this.router.navigateByUrl('/home')
  }

}
