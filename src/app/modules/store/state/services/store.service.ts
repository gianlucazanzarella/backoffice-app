import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { IProduct } from '../../interfaces/product.interface';

@Injectable()
export class StoreService {

  getStores(): Observable<IStore[]> {
    return this.httpClientService
      .get<IStore[]>(`stores`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IStore[]>) => res.body || [])
      );
  }

  getStore(storeId: string): Observable<IStoreData | null> {
    return this.httpClientService
      .get<IStoreData | null>(`stores/${ storeId }`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IStoreData | null>) => res.body)
      );
  }

  getProducts(storeId: string): Observable<IProduct[]> {
    return this.httpClientService
      .get<IProduct[]>(`stores/${ storeId }/products`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IProduct[]>) => res.body || [])
      );
  }

  deleteProduct(storeId: string, productId: string): Observable<HttpResponse<null>> {
    return this.httpClientService
      .delete<any>(`stores/${ storeId }/products/${ productId }`, {
        observe: 'response',
      });
  }

  constructor(private httpClientService: HttpClient) { }
}
