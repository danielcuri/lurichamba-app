import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Publication } from 'src/app/interfaces/publication.interface';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {
  search_params?: any;
  search_category_params?: any;
  search_category_url_image_params?: any;
  search_category_name_params?: any;

  publications: Publication[] = [];
  @ViewChild(IonInfiniteScroll, { static: true })
  infiniteScroll: IonInfiniteScroll;

  constructor(
    private activatedRoute: ActivatedRoute,
    private serviceCategory: CategoryService,
    private loadingCtrl: LoadingController
  ) {}

  async ngOnInit() {
    // const publication  = this.route.snapshot.data['state.publications']; // Retrieve publications from navigation state
  }

  async ionViewWillEnter() {
    this.activatedRoute.params.subscribe((params) => {
      console.log('PAGE', params['search']);
      this.search_params = params['search'] ?? '';
      this.search_category_params = params['tipo_servicio_id'] ?? '';
      this.search_category_url_image_params =
        params['tipo_servicio_icon'] ?? '';
      this.search_category_name_params = params['tipo_servicio_name'] ?? '';
    });
    this.serviceCategory.popularesPage = 1; // Restablecer el estado de paginación

    console.log(this.search_category_params);

    await this.goSearchCategory(
      this.search_params,
      this.search_category_params
    );
  }

  async goSearchCategory(search?: any, search_category_params?: any) {
    await this.loadingCtrl
      .create({
        message: 'Buscando publicación',
      })
      .then(async (loading) => {
        loading.present();

        this.serviceCategory
          .searchPublication(search, search_category_params)
          .then(async (info) => {
            console.log('publicaciones', info);

            loading.dismiss();
            if (info.codigo == 200) {
              // this.publications = info.publicaciones;

              const arrTemp = [...this.publications, ...info.publicaciones];
              this.publications = arrTemp; // Cast to Pelicula[]
              this.infiniteScroll.complete();
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

  async loadData(search?: any, search_category_params?: any) {
    this.serviceCategory
      .searchPublication(search, search_category_params)
      .then(async (info) => {
        console.log('publicaciones', info);

        if (info.codigo == 200) {
          // this.publications = info.publicaciones;

          const arrTemp = [...this.publications, ...info.publicaciones];
          this.publications = arrTemp; // Cast to Pelicula[]
          this.infiniteScroll.complete();
        }

        if (info.publicaciones.length === 0) {
          this.infiniteScroll.disabled = true;
          return;
        }
      })
      .catch((err) => {
        console.log(err);
        alert(JSON.stringify(err));
        // reject(err);
      });
  }
}
