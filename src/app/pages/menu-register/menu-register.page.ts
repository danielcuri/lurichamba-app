import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-register',
  templateUrl: './menu-register.page.html',
  styleUrls: ['./menu-register.page.scss'],
})
export class MenuRegisterPage  {

  constructor(private router : Router) {}

  async goRegisterUser(){
    await this.router.navigate(['register'], {});
  }

  async goRegisterEntrepreneur(){
    await this.router.navigate(['register-entrepreneur'], {});
  }

  
}
