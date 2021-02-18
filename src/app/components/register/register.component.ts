import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SocialLoginService } from '../../services/social-login.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private isValidNickname = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)\S{7,15}$/
  private isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
  private isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,}$/

  registerForm : FormGroup
  loading = false

  constructor( 

    private http: HttpClient,
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
   * Verifica que el formulario sea válido y envía la petición para registrar al usuario con los datos proporcionados.
   * @param event Evento disparado al enviar el formulario 'submit'
   */
  register(event : Event){

    event.preventDefault()

    if( this.registerForm.valid && this.validPassword() ){

      this.loading = true

      this.http.post(`${environment.auth_api}/register`, this.registerForm.value)
        .subscribe({

          next: (response) => {

            this.loading = false
  
            this.showToastAlert(response['message'], 'success', 5000, true)
              .then( () =>  this.router.navigate(['/login']) )

          },
          error: (error) => {

            this.loading = false

            if(error.status === 403){
              
              this.showToastAlert(error.error.message, 'warning', 2000)

            }

          }

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

  /**
   * Utiliza el servicio de LoginService para obtener un token de autenticación de Google y lo envía al backend 
   */
  loginWithGoogle():void{

    this.socialLoginService.googleLogin()
      .then(data => {

        const params = new HttpParams().set('token', data['idToken'])

        this.http.post(`${environment.auth_api}/google`, params)
          .subscribe({

            next: (response) => {

              console.log(response)

              this.showToastAlert(response['message'], 'success', 5000, true)
                .then( () => this.router.navigate(['/home']) )

            },
            error: (error) => {
              console.warn(error)
              // error.error.message
              this.showToastAlert('Lo sentimos ha ocurrido un error, vuelva a intentarlo más tarde.', 'error', 2000)

            }

          })

      })
      .catch(console.log)
  }

  /**
   * Utiliza el servicio de LoginService para obtener un token de autenticación de Facebook y lo envía al backend 
   */
  loginWithFacebook():void{

    this.socialLoginService.facebookLogin()
      .then(data => {

        const params = new HttpParams().set('token', data['authToken'])

        this.http.post(`${environment.auth_api}/facebook`, params)
          .subscribe({

            next: response => {

              console.log(response)

              this.showToastAlert(response['message'], 'success', 5000, true)
                .then( () => this.router.navigate(['/home']) )

            },
            error: error => {

              console.log(error)

              this.showToastAlert(error.error.message, 'error', 2000)

            }

          })

      })
      .catch(error => console.log(error))

  }

  /**
   * Muestra una alerta de tipo toast.
   * @param text Texto de la alerta.
   * @param icon Icono a mostrar.
   * @param timer Tiempo que durará visible la alerta.
   * @param showTimerBar Indica si se debe mostrar la barra de tiempo en la parte inferior de la alerta.
   * @returns Una promesa del tipo SweetAlertResult
   */
  showToastAlert(text:string, icon:string, timer:number = 0, showTimerBar:boolean = false):Promise<any>{
    
    return Swal.fire({
      text: text,
      icon: icon,
      toast: true,
      position: 'top-right',
      showConfirmButton: false,
      timer: timer,
      timerProgressBar: showTimerBar,
    })

  }

}
