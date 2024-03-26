import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [NavbarComponent,MatIconModule,CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  lastMonthsIncome=['January:800','February:700','March:400'];
  currentMonthIncome='$400';
  lastMonthsExpense=['Light bill:200','xyz:300','xyz:100'];
  currentMonthExpense='$100';
  income(){}
  expense(){}
}