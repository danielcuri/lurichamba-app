import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('./pages/register/register.module').then(
        (m) => m.RegisterPageModule
      ),
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./pages/main/main.module').then((m) => m.MainPageModule),
  },
  {
    path: 'by-category',
    loadChildren: () =>
      import('./pages/by-category/by-category.module').then(
        (m) => m.ByCategoryPageModule
      ),
  },
  {
    path: 'result',
    loadChildren: () =>
      import('./pages/result/result.module').then((m) => m.ResultPageModule),
  },
  {
    path: 'publication',
    loadChildren: () =>
      import('./pages/publication/publication.module').then(
        (m) => m.PublicationPageModule
      ),
  },
  {
    path: 'menu-register',
    loadChildren: () =>
      import('./pages/menu-register/menu-register.module').then(
        (m) => m.MenuRegisterPageModule
      ),
  },  {
    path: 'register-entrepreneur',
    loadChildren: () => import('./pages/register-entrepreneur/register-entrepreneur.module').then( m => m.RegisterEntrepreneurPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
