import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IStats } from '../interfaces/stats.interface';
import { IStore } from '../../../../shared/interfaces/store.interface';

@Injectable()
export class StatsService {

  getStores(): Observable<IStore[]> {
    return this.httpClientService
      .get<IStore[]>(`stores`, {
        observe: 'response',
      })
      .pipe(
        map((res: HttpResponse<IStore[]>) => res.body || [])
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
