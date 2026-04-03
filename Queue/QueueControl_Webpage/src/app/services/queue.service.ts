import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  private readonly baseUrl = 'https://localhost:7284/api/Queue';

  constructor(private http: HttpClient) {}

  getNext(): Observable<string> {
    return this.http.post(this.baseUrl + '/next', {}, { responseType: 'text' });
  }

  getCurrent(): Observable<string> {
    return this.http.get(this.baseUrl + '/current', { responseType: 'text' });
  }

  reset(): Observable<string> {
    return this.http.post(this.baseUrl + '/reset', {}, { responseType: 'text' });
  }
}
