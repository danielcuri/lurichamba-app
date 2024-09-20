import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register-entrepreneur',
  templateUrl: './register-entrepreneur.page.html',
  styleUrls: ['./register-entrepreneur.page.scss'],
})
export class RegisterEntrepreneurPage implements OnInit {
  userRegister: any = {
    nombres: '',
    apellido_paterno: '',
    apellido_materno: '',
    numero_documento: '',
    email: '',
    direccion_fiscal: '',
    password: '',
    tipo_documento_id: '',
    aceptacion_termino: 0,
    numero_celular: '',
  };

  errors: [] = [];
  constructor(
    private loadingCtrl: LoadingController,
    private userService: UserService,
    private router: Router,
    private toastCtrl: ToastController
  ) {}
  ngOnInit() {
    this.errors;
  }
  async register() {
    this.userRegister.aceptacion_termino = this.userRegister.aceptacion_termino
      ? 1
      : 0;

    if (!this.userRegister.aceptacion_termino) {
      await this.showTermsToast();
      return;
    }

    const userRegister = this.userRegister; // Get form values

    await this.loadingCtrl
      .create({
        message: 'Registrandose...',
      })
      .then(async (loading) => {
        loading.present();
        return new Promise(async (resolve, reject) => {
          this.userService
            .register(userRegister)
            .then(async (info) => {
              resolve(info);
              loading.dismiss();
              if (!info.respuesta) {
                alert(info.mensaje);
                return;
              }

              await this.router.navigate(['login'], {});
            })
            .catch((err) => {
              console.log(this.userRegister);
              this.errors = err.error.errores;
              // alert(JSON.stringify(err));
              reject(err);
              loading.dismiss();
            });
        });
      });
  }

  async showTermsToast() {
    const toast = await this.toastCtrl.create({
      message: 'Debes aceptar los términos y condiciones para continuar.',
      duration: 2000, // Display for 2 seconds
      color: 'warning', // Set toast color (optional)
    });
    await toast.present();
  }
}
