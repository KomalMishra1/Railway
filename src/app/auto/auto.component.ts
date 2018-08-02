import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-auto',
  templateUrl: './auto.component.html',
  styleUrls: ['./auto.component.css']
})
export class AutoComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }
  myControl: FormControl = new FormControl();

  options = [
    'One',
    'Two',
    'Three'
  ];
}
