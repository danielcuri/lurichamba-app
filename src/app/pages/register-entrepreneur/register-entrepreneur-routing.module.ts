import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterEntrepreneurPage } from './register-entrepreneur.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterEntrepreneurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterEntrepreneurPageRoutingModule {}
