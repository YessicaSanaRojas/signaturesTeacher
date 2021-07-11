import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  
  dateNow : number;

  constructor() {
    this.dateNow = new Date().getFullYear();
   }

  ngOnInit(): void {
  }

}
