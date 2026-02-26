import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IgxCardModule, IgxButtonModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, RouterLink, IgxCardModule, IgxButtonModule, IgxIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  rates = [
    { label: 'Savings Account', rate: '4.5%', icon: 'savings', color: '#22c55e' },
    { label: 'Checking Account', rate: '1.2%', icon: 'account_balance', color: '#0077b6' },
    { label: '30-yr Mortgage', rate: '6.8%', icon: 'home', color: '#f59e0b' },
    { label: 'Certificate of Deposit', rate: '5.2%', icon: 'card_membership', color: '#00b4d8' },
  ];

  quickActions = [
    { label: 'Transfer Money', icon: 'swap_horiz', route: '/dashboard' },
    { label: 'Pay Bills', icon: 'receipt_long', route: '/dashboard' },
    { label: 'Open Account', icon: 'add_circle', route: '/login' },
    { label: 'Apply for Loan', icon: 'request_quote', route: '/appointments' },
  ];

  news = [
    {
      title: 'Fed Holds Rates Steady in Latest Meeting',
      summary: 'The Federal Reserve maintained its benchmark interest rate, signaling a cautious approach amid mixed economic signals.',
      date: 'Dec 10, 2024',
      category: 'Economy'
    },
    {
      title: 'SecureBank Launches New Mobile App Features',
      summary: 'Our latest update brings enhanced budgeting tools, instant notifications, and improved security features to all customers.',
      date: 'Dec 8, 2024',
      category: 'Product'
    },
    {
      title: 'Tips for Year-End Tax Planning',
      summary: 'Maximize your deductions and plan for the new year with these essential tax strategies from our financial advisors.',
      date: 'Dec 5, 2024',
      category: 'Finance'
    },
  ];

  stats = [
    { value: '250,000+', label: 'Customers' },
    { value: '$5B+', label: 'Assets Under Management' },
    { value: '99.9%', label: 'Uptime' },
    { value: '24/7', label: 'Support' },
  ];
}
