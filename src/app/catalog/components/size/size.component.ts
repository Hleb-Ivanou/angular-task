import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  @Input() sizes: [];
  isOpen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  onToggle() {
    this.isOpen = !this.isOpen;
  }

}
