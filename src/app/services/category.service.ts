import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CategoryResponse } from '../interfaces/category';
import { Preferences } from '@capacitor/preferences';
import { PublicationResponse } from '../interfaces/publication.interface';
@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  categories: any;
  publications: any;
  public popularesPage = 0;

  constructor(private http: HttpClient) {
    this.getCategories();
  }

  async setCategories(data: any) {
    await Preferences.set({
      key: 'categories',
      value: JSON.stringify(data),
    });
  }
  async getCategories() {
    const ret = await Preferences.get({ key: 'categories' });
    if (ret.value) {
      const categories = JSON.parse(ret.value);
      this.categories = categories;
    }
    return this.categories;
  }

  async searchCategories(): Promise<CategoryResponse> {
    return new Promise((resolve, reject) => {
      this.http
        .get<CategoryResponse>(`${environment.url}/categoria/lista`, {})
        .subscribe({
          next: (v) => {
            console.log('categories', v);
            if (!v.respuesta) {
              reject(v.mensaje);
            }
            this.setCategories(v.data);
            resolve(v);
          },
          error: (e) => reject(e),
          complete: () => console.info('complete'),
        });
    });
  }

  async searchPublication(
    search: any,
    categoria_id?: any
  ): Promise<PublicationResponse> {

    this.popularesPage++;


    return new Promise((resolve, reject) => {
      this.http
        .get<PublicationResponse>(`${environment.url}/publicacion/lista?page=${this.popularesPage}`, {
          params: {
            search,
            categoria_id,
          },
        })
        .subscribe({
          next: (v) => {
            console.log('categories', v);
            if (!v.respuesta) {
              reject(v.mensaje);
            }
            resolve(v);
          },
          error: (e) => reject(e),
          complete: () => console.info('complete'),
        });
    });
  }
}
