import { Component } from '@angular/core';
import { NgFor, CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IgxCardModule, IgxButtonModule, IgxIconModule, IgxListModule, IgxLinearProgressBarComponent } from 'igniteui-angular';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NgFor, NgClass, CurrencyPipe, DatePipe, RouterLink, IgxCardModule, IgxButtonModule, IgxIconModule, IgxListModule, IgxLinearProgressBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  accounts = [
    { name: 'Checking Account', number: '••••4821', balance: 12450.00, icon: 'account_balance_wallet', color: '#0077b6' },
    { name: 'Savings Account', number: '••••7293', balance: 45230.50, icon: 'savings', color: '#22c55e' },
    { name: 'Investment Account', number: '••••1056', balance: 98750.00, icon: 'trending_up', color: '#f59e0b' },
  ];

  transactions = [
    { description: 'Amazon Purchase', date: new Date('2024-12-10'), amount: -127.45, type: 'debit', icon: 'shopping_cart' },
    { description: 'Salary Deposit', date: new Date('2024-12-08'), amount: 5200.00, type: 'credit', icon: 'work' },
    { description: 'Netflix Subscription', date: new Date('2024-12-07'), amount: -15.99, type: 'debit', icon: 'subscriptions' },
    { description: 'Transfer from Savings', date: new Date('2024-12-05'), amount: 500.00, type: 'credit', icon: 'swap_horiz' },
    { description: 'Electric Bill', date: new Date('2024-12-03'), amount: -89.20, type: 'debit', icon: 'bolt' },
  ];

  quickActions = [
    { label: 'Transfer', icon: 'swap_horiz', color: '#0077b6' },
    { label: 'Pay Bills', icon: 'receipt_long', color: '#22c55e' },
    { label: 'Statement', icon: 'download', color: '#f59e0b' },
    { label: 'Apply Loan', icon: 'request_quote', color: '#00b4d8' },
  ];

  spending = [
    { category: 'Housing', amount: 1800, pct: 45 },
    { category: 'Food', amount: 620, pct: 31 },
    { category: 'Transport', amount: 310, pct: 20 },
    { category: 'Entertainment', amount: 185, pct: 12 },
    { category: 'Utilities', amount: 230, pct: 18 },
  ];

  totalBalance(): number {
    return this.accounts.reduce((s, a) => s + a.balance, 0);
  }
}
