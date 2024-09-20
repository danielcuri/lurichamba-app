import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private loadingCtrl: LoadingController,
    private userService: UserService
  ) {}

  ngOnInit() {}
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
