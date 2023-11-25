import { Component } from '@angular/core';
import { DependecyInjectionService } from '../dependecy-injection.service';

@Component({
  selector: 'app-demnstrate-dependecny',
  templateUrl: './demnstrate-dependecny.component.html',
  styleUrls: ['./demnstrate-dependecny.component.scss']
})
export class DemnstrateDependecnyComponent {
  // private dpendecyInjectionService: DependecyInjectionService = new DependecyInjectionService;

constructor(private dpendecyInjectionService:DependecyInjectionService){
  
}
dependency(){
  this.dpendecyInjectionService.dependecny();
}
}
