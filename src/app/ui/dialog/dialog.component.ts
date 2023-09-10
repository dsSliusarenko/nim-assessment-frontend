import {Component, OnInit} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'nim-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.scss']
})
export class DialogComponent implements OnInit {
  orderForm: FormGroup = this.formBuilder.group({});

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      name: [null, Validators.required],
      phone: [null, [Validators.pattern(/^[()\-]+$/)]],
      address: [null, Validators.required]
    })
  }

  placeOrder(): void {
  }
}
