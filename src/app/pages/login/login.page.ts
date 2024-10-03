import { Component, OnInit, enableProdMode } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userData: any = {
    email: '',
    password: '',
  };
  constructor(
    private router: Router,
    private activeRouter:ActivatedRoute ,
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) {}

  ngOnInit() {
    console.log('here')
    this.activeRouter.queryParams.subscribe(params => {
      const paramName = params['paramName']; // Aquí obtienes el valor del parámetro.
      console.log({paramName})
      if (paramName) {
        // Haz algo con `paramName`.
        this.userData.email = paramName
      } else {
        // Parametro no recibido, haz algo más si es necesario.
      }
    });
  }
  async goMain() {
    console.log('aaaa');
    await this.router.navigate(['main'], {});
  }
  async login() {
    console.log({ user: this.userData });
    await this.loadingCtrl
      .create({
        message: 'Validando credenciales',
      })
      .then(async (loading) => {
        loading.present();
        return new Promise(async (resolve, reject) => {
          this.userService
            .loginUser(this.userData)
            .then(async (info) => {
              resolve(info);
              loading.dismiss();
              if (info.respuesta) {
                console.log('SUCCES RESPE',info.respuesta)
                // alert(info.mensaje);
                await this.router.navigate(['main'], {});

              }

            })
            .catch((err) => {
              console.log('LOGIN ERROR', err);
              alert(JSON.stringify(err));
              reject(err);
              loading.dismiss();
            });
        });
      });
  }
}
