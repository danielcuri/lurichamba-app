import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  async goLogin(){
    await this.router.navigate(['login'], {});
  }
  async goRegister(){
    await this.router.navigate(['register'], {});
  }

  async goMenuRegister(){
    await this.router.navigate(['menu-register'], {});
  }
}
