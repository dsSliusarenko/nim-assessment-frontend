import {Component, OnInit} from '@angular/core';
import {MenuService} from "../services/menu.service";
import {Observable} from "rxjs";
import {MenuItem} from "../services/menuItem";
import {BillItem} from "./BillItem";

@Component({
  selector: 'nim-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  menu$!: Observable<MenuItem[]>;

  bill: BillItem[] = [];
  billTotalAmount: number = 0;

  constructor(private menuService: MenuService) {
  }

  ngOnInit() {
    this.menu$ = this.menuService.getAll();
  }

  addToOrder(menuItem: MenuItem | BillItem): void {
    const objectExists: boolean = this.bill.some((billItem): boolean => billItem.id === menuItem.id);

    if (!objectExists) {
      this.bill.push(<BillItem>{
        id: menuItem.id,
        name: menuItem.name,
        price: menuItem.price,
        quantity: 1
      });
      this.calcTotalAmount();
    } else {
      this.bill = this.bill.map((billItem: BillItem) => {
        if (billItem.id === menuItem.id) {
          return {...billItem, quantity: billItem.quantity + 1};
        } else {
          return billItem;
        }
      })
      this.calcTotalAmount();
    }
  }

  removeFromOrder(menuItem: MenuItem | BillItem): void {
    const indexToRemove: number = this.bill.findIndex((billItem) => billItem.id === menuItem.id);

    if (indexToRemove !== -1) {
      this.bill.splice(indexToRemove, 1);
    }
    this.calcTotalAmount();
  }

  isItemInBill(menuItem: MenuItem): boolean {
    return !!this.bill.find(billItem => billItem.id === menuItem.id);
  }

  calcTotalAmount(): void {
    let amount: number = 0;

    this.bill.forEach((billItem: BillItem) => {
      amount = amount + (billItem.price * billItem.quantity);
    })

    this.billTotalAmount = amount;
  }

  decreaseBillItem(billItemToDecrease: BillItem): void {
    const item = this.bill.find((billItem) => billItem.id === billItemToDecrease.id);

    if (item && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      this.removeFromOrder(billItemToDecrease)
    }

    this.calcTotalAmount();
  }
}
