import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private http: HttpClient) {}

  getUsersBySocialMedia(): Observable<any> {
    return this.http.get('http://localhost:3000/chart');
  }

  getUsersBySocialMediaFormatted(): Observable<any> {
    return this.getUsersBySocialMedia().pipe(
      map((data) => ({
        labels: Object.keys(data),
        values: Object.values(data),
      }))
    );
  }
}
