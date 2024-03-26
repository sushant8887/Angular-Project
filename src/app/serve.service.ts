import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
private count: number = 0;

increment(){
  this.count++;
}
decrement(){
  this.count--;
}
getCount(){
  return this.count;
}
 
}
