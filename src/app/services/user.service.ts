import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoginResponse } from '../interfaces/user.interface';
import { Preferences } from '@capacitor/preferences';
import { RegisterResponse } from '../interfaces/register.interface';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  public user: any;
  constructor(private http: HttpClient) {
    this.getUserLogged();
  }

  async setUserLogged(data: any) {
    await Preferences.set({
      key: 'user',
      value: JSON.stringify({ ...data }),
    });
    this.user = data;
  }
  async getUserLogged() {
    console.log('enter');
    const ret = await Preferences.get({ key: 'user' });
    if (ret.value) {
      const user = JSON.parse(ret.value);
      this.user = user;
    }
    return this.user;
  }
  loginUser(data: any): Promise<LoginResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .post<LoginResponse>(`${environment.url}/auth/login`, data)
        .subscribe({
          next: (v) => {
            if (!v.respuesta) {
              reject(v.mensaje);
            }
            // const {projects} = v.data;
            // this.currentProject=projects[0];
            // console.log(this.currentProject);
            this.setUserLogged(v.data);
            resolve(v);
          },
          error: (e) => reject(e),
          complete: () => console.info('complete'),
        });
    });
  }

  register(data: any): Promise<RegisterResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .post<RegisterResponse>(`${environment.url}/auth/registrar`, data)
        .subscribe({
          next: (v) => {
            if (!v.respuesta) {
              reject(v.mensaje);
            }

            resolve(v);
          },
          error: (e) => reject(e),
          complete: () => console.info('complete'),
        });
    });
  }
}
