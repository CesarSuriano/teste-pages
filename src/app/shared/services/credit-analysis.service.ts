import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { CreditAnalysis } from '../models/credit-analysis';

@Injectable({
  providedIn: 'root'
})
export class CreditAnalysisService {
  private creditAnalysis!: CreditAnalysis | null;

  constructor(private http: HttpClient) { }

  public getCreditAnalysis(): CreditAnalysis | null {
    return this.creditAnalysis;
  }
  
  public setCreditAnalysis(value: CreditAnalysis | null) {
    this.creditAnalysis = value;
  }

  fetchCreditAnalysis(): Observable<CreditAnalysis> {
    return this.http.get('/data/grouped_analysis.json').pipe(
      map((data: any) => {
        return data as CreditAnalysis;
      })
    );
  }
}
