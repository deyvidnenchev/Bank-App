import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgIf, NgFor } from '@angular/common';
import { IgxInputGroupModule, IgxButtonModule, IgxSelectModule, IgxIconModule } from 'igniteui-angular';

@Component({
  selector: 'app-appointments',
  standalone: true,
  imports: [FormsModule, NgIf, NgFor, IgxInputGroupModule, IgxButtonModule, IgxSelectModule, IgxIconModule],
  templateUrl: './appointments.component.html',
  styleUrl: './appointments.component.scss'
})
export class AppointmentsComponent {
  name = '';
  email = '';
  phone = '';
  preferredDate = '';
  preferredTime = '';
  service = '';
  submitted = false;

  services = [
    'Portfolio Review',
    'Loan Consultation',
    'Retirement Planning',
    'General Inquiry'
  ];

  times = ['09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'];

  onSubmit() {
    if (this.name && this.email && this.service && this.preferredDate) {
      this.submitted = true;
    }
  }

  reset() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.preferredDate = '';
    this.preferredTime = '';
    this.service = '';
    this.submitted = false;
  }
}
