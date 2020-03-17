import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagi',
  templateUrl: './pagi.component.html',
  styleUrls: ['./pagi.component.scss']
})
export class PagiComponent implements OnInit {
  items = [];
  pageOfItems: Array<any>;

  constructor() { }

  ngOnInit() {
    this.items = Array(150).fill(0).map((x ,i) => ({
      id: i + 1,
      name: `Item ${i + 1}`
    }));
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

}
