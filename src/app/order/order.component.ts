import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Observable} from "rxjs";
import {Menu} from "../services/menu";

@Component({
  selector: 'nim-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  menu$!: Observable<Menu[]>;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menu$ = this.menuService.getAll();
  }
}
