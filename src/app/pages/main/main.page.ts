import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Publication } from 'src/app/interfaces/publication.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {
  public publications: Publication[] | undefined;

  search: any = {
    name: '',
  };

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private serviceCategory: CategoryService,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {}

  async goSearchCategory() {
    await this.loadingCtrl
      .create({
        message: 'Buscando publicación',
      })
      .then(async (loading) => {
        loading.present();
        await this.router.navigate([
          'publication',
          { search: this.search.name },
        ]);
        loading.dismiss();
      });
  }

  async goByCategory() {
    await this.router.navigate(['by-category'], {});
  }

 
}
