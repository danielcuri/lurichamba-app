import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuRegisterPageRoutingModule } from './menu-register-routing.module';

import { MenuRegisterPage } from './menu-register.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuRegisterPageRoutingModule
  ],
  declarations: [MenuRegisterPage]
})
export class MenuRegisterPageModule {}
