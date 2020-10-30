import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.css']
})
export class PageTitleComponent implements OnInit {
  title = 'This is a page of lists.';
  gif = 'https://i.pinimg.com/originals/e4/26/70/e426702edf874b181aced1e2fa5c6cde.gif'
  
  constructor() { }

  ngOnInit() {
  }

}
