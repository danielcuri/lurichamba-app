import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-by-category',
  templateUrl: './by-category.page.html',
  styleUrls: ['./by-category.page.scss'],
})
export class ByCategoryPage implements OnInit {
  public categories: Category[] | undefined;

  constructor(
    private router: Router,
    private serviceCategory: CategoryService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {}
  async ionViewWillEnter() {
    await this.onLoadCategories();
  }
  async doRefresh(event: any) {
    // this.getList(event);
    console.log('doRefresh');
    await this.onLoadCategories(event);
  }
  async onLoadCategories(event?) {
    await this.loadingCtrl
      .create({
        message: 'Buscando Categorias',
      })
      .then(async (loading) => {
        loading.present();
        this.serviceCategory
          .searchCategories()
          .then(async (info) => {
            console.log(info);
            if (event) event.target.complete();  
            loading.dismiss();
            if (info.codigo == 200) {
              this.categories = info.data;
            }
          })
          .catch((err) => {
            console.log(err);
            alert(JSON.stringify(err));
            // reject(err);
            loading.dismiss();
          });
      });
  }
  async goResult() {
    await this.router.navigate(['result'], {});
  }
  navigateToCategory(category: any) {
    this.router.navigate([
      'publication',
      { 
        tipo_servicio_id: category.id,
        tipo_servicio_name: category.nombres,
        tipo_servicio_icon:category.icono_url


       },


    ]);
  }
  
}
