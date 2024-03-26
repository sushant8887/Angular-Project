import { Component } from '@angular/core';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-count',
  standalone: true,
  imports: [],
  templateUrl: './count.component.html',
  styleUrl: './count.component.css'
})
export class CountComponent {
currentCount: number = 0;
constructor (private cs : ServeService) {

}
ngOnInit( ) { this.currentCount=this.cs.getCount(); }

increment( ) { this.cs.increment();
  this.currentCount=this.cs.getCount(); }

  decrement( ) { this.cs.decrement();
    this.currentCount=this.cs.getCount(); }
}
