import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CountComponent } from './count/count.component';
import { LoginComponent } from './emp/login/login.component';
import { RegComponent } from './emp/reg/reg.component';
import { AboutComponent } from './admin/about/about.component';
import { NavbarComponent } from './emp/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CountComponent,LoginComponent,RegComponent,AboutComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
