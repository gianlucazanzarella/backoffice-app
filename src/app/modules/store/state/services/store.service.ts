import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { IStore, IStoreData } from '../../interfaces/store.interface';
import { IProduct } from '../../interfaces/product.interface';
import { IStats } from '../../interfaces/stats.interface';

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

  getProduct(storeId: string, productId: string): Observable<IProduct | null> {
    return this.httpClientService
      .get<IProduct | null>(`stores/${ storeId }/products/${ productId }`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IProduct | null>) => res.body)
      );
  }

  deleteProduct(storeId: string, productId: string): Observable<void> {
    return this.httpClientService
      .delete<void>(`stores/${ storeId }/products/${ productId }`);
  }

  createProduct(storeId: string, product: IProduct): Observable<void> {
    return this.httpClientService
      .post<void>(`stores/${ storeId }/products`,
        product
      ).pipe(
        catchError((error) => {
          if (error.status === 200) {
            return of(error.error.text);
          } else {
            throw new Error("Error during product creation");
          }
        })
      );
  }

  getStats(storeId: string): Observable<IStats[]> {
    return this.httpClientService
      .get<IStats[]>(`stores/${ storeId }/stats/categories`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IStats[]>) => res.body || [])
      );
  }

  constructor(private httpClientService: HttpClient) { }
}
