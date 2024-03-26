import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { log } from 'console';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router:Router) {
    
  }
  
  registrationPage(){
    this.router.navigate(['/emp/reg']);
    console.log("yo my");
    
  }
}
