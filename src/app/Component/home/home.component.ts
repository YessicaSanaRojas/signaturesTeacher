import { Component, OnInit } from '@angular/core';
import { FunctionalityService } from '../../Service/functionality.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public functionalityService : FunctionalityService) { }

  ngOnInit(): void {
  }

}
