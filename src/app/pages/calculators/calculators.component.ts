import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, DecimalPipe, CurrencyPipe } from '@angular/common';
import { IgxTabsModule, IgxInputGroupModule, IgxButtonModule, IgxCardModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-calculators',
  standalone: true,
  imports: [FormsModule, NgIf, DecimalPipe, CurrencyPipe, IgxTabsModule, IgxInputGroupModule, IgxButtonModule, IgxCardModule, IgxIconModule],
  templateUrl: './calculators.component.html',
  styleUrl: './calculators.component.scss'
})
export class CalculatorsComponent {
  // Loan Calculator
  loanPrincipal = 10000;
  loanRate = 5;
  loanTerm = 60;
  loanResult: { monthly: number; total: number; interest: number } | null = null;

  // Mortgage Calculator
  homePrice = 350000;
  downPayment = 70000;
  mortgageRate = 6.8;
  mortgageTerm = 30;
  mortgageResult: { monthly: number; total: number; interest: number } | null = null;

  // Retirement Calculator
  currentAge = 30;
  retirementAge = 65;
  currentSavings = 25000;
  monthlyContrib = 500;
  annualReturn = 7;
  retirementResult: { projected: number; contributions: number; growth: number } | null = null;

  calcLoan() {
    const r = this.loanRate / 100 / 12;
    const n = this.loanTerm;
    const p = this.loanPrincipal;
    const monthly = r === 0 ? p / n : p * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    this.loanResult = { monthly, total, interest: total - p };
  }

  calcMortgage() {
    const principal = this.homePrice - this.downPayment;
    const r = this.mortgageRate / 100 / 12;
    const n = this.mortgageTerm * 12;
    const monthly = principal * r * Math.pow(1 + r, n) / (Math.pow(1 + r, n) - 1);
    const total = monthly * n;
    this.mortgageResult = { monthly, total, interest: total - principal };
  }

  calcRetirement() {
    const months = (this.retirementAge - this.currentAge) * 12;
    const r = this.annualReturn / 100 / 12;
    const futureCurrentSavings = this.currentSavings * Math.pow(1 + r, months);
    const futureContribs = this.monthlyContrib * (Math.pow(1 + r, months) - 1) / r;
    const projected = futureCurrentSavings + futureContribs;
    const contributions = this.currentSavings + this.monthlyContrib * months;
    this.retirementResult = { projected, contributions, growth: projected - contributions };
  }
}
