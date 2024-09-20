import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuRegisterPage } from './menu-register.page';

const routes: Routes = [
  {
    path: '',
    component: MenuRegisterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuRegisterPageRoutingModule {}
