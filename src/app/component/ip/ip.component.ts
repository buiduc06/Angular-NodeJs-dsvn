import { Component, OnInit } from '@angular/core';
import { TestsvService } from '../../testsv.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css'],
  providers: [TestsvService]
})
export class IpComponent {

constructor(private ipservice:TestsvService){
}
ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.ipservice.fetchData();
  
}

}
