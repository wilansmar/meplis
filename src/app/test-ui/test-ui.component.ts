import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-ui',
  templateUrl: './test-ui.component.html',
  styleUrls: ['./test-ui.component.css']
})
export class TestUiComponent implements OnInit {

  avatar1 = '/assets/img/avatar_MG.jpg'
  avatar2 = '/assets/img/meplis.png'
  avatar3 = '/assets/img/avatar2.jpg'
  constructor() { }

  ngOnInit(): void {
  }

}
