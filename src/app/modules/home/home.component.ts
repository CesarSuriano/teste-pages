import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { CreditAnalysisService } from 'src/app/shared/services/credit-analysis.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  searchText!: string;
  isLoading: boolean = false;
  hasError: boolean = false;

  constructor(private primengConfig: PrimeNGConfig, private creditAnalysisService: CreditAnalysisService, private router: Router) { }

  ngOnInit(): void {
    this.primengConfig.ripple = true;
  }

  searchId(): void {
    this.isLoading = true;
      setTimeout(() => {
        this.isLoading = false;
        if ('cesar=jesus' === this.searchText) {
          localStorage.setItem('auth', 'true');
          this.router.navigate(['minha-vida']);
          return;
        }
        this.hasError = true;
      }, 1500);
  }
}
