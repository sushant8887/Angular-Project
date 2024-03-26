import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg',
  standalone: true,
  imports: [],
  templateUrl: './reg.component.html',
  styleUrl: './reg.component.css'
})
export class RegComponent {
  constructor(private router:Router) {
    
  }

  onLogout(){
    this.router.navigate(['/emp/login']);
  }
}
