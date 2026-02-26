import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IgxCardModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule } from 'igniteui-angular';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule, IgxCardModule, IgxButtonModule, IgxIconModule, IgxInputGroupModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {
  searchTerm = '';

  articles = [
    {
      title: 'Budgeting Basics',
      category: 'Personal Finance',
      icon: 'account_balance_wallet',
      color: '#0077b6',
      summary: 'Master the fundamentals of budgeting with the 50/30/20 rule. Learn how to track income, control spending, and build a solid financial foundation.',
      readTime: '5 min read',
      level: 'Beginner'
    },
    {
      title: 'Understanding Credit Scores',
      category: 'Credit',
      icon: 'credit_score',
      color: '#22c55e',
      summary: 'Discover what factors affect your credit score, how lenders use it, and actionable steps to improve your rating from fair to excellent.',
      readTime: '7 min read',
      level: 'Beginner'
    },
    {
      title: 'Investment 101',
      category: 'Investing',
      icon: 'trending_up',
      color: '#f59e0b',
      summary: 'Start your investment journey with a clear overview of stocks, bonds, mutual funds, and ETFs. Understand risk vs. reward and portfolio diversification.',
      readTime: '10 min read',
      level: 'Intermediate'
    },
    {
      title: 'Retirement Planning Guide',
      category: 'Retirement',
      icon: 'beach_access',
      color: '#00b4d8',
      summary: 'Plan for the retirement you deserve. Explore 401(k), IRA, Roth IRA options, compound interest strategies, and how to estimate your retirement needs.',
      readTime: '12 min read',
      level: 'Intermediate'
    },
    {
      title: 'Mortgage Tips & Tricks',
      category: 'Home Buying',
      icon: 'home',
      color: '#8b5cf6',
      summary: 'Navigate the home-buying process like a pro. Learn about pre-approval, rate comparison, points, PMI, and strategies to pay off your mortgage early.',
      readTime: '8 min read',
      level: 'Intermediate'
    },
    {
      title: 'Tax Planning Strategies',
      category: 'Taxes',
      icon: 'receipt_long',
      color: '#ef4444',
      summary: 'Reduce your tax burden legally with proven strategies including deductions, credits, tax-loss harvesting, and retirement account contributions.',
      readTime: '9 min read',
      level: 'Advanced'
    },
  ];

  get filtered() {
    const term = this.searchTerm.toLowerCase();
    if (!term) return this.articles;
    return this.articles.filter(a =>
      a.title.toLowerCase().includes(term) ||
      a.category.toLowerCase().includes(term) ||
      a.summary.toLowerCase().includes(term)
    );
  }
}
