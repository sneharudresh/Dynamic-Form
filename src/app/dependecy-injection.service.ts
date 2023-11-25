import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependecyInjectionService {

  constructor() { }
  
  dependecny(){
    alert("Calling dpendency");
  }
}
