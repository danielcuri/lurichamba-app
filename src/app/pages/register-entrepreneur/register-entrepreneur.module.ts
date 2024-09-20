import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterEntrepreneurPageRoutingModule } from './register-entrepreneur-routing.module';

import { RegisterEntrepreneurPage } from './register-entrepreneur.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterEntrepreneurPageRoutingModule,
    ReactiveFormsModule

  ],
  declarations: [RegisterEntrepreneurPage]
})
export class RegisterEntrepreneurPageModule {}
