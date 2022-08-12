import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  productFormGroup: FormGroup;
  submitted: boolean = false;
  constructor(private fb: FormBuilder, private productService: ProductsService) { }

  ngOnInit(): void {
    this.productFormGroup = this.fb.group({
      name: ["", [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      price: [0, Validators.required],
      quantity: [0, Validators.required],
      selected: [true, Validators.required],
      available: [true, Validators.required],
    });
  }
  onSaveProduct() {
    this.submitted = true;
    if (this.productFormGroup.invalid) return;
    this.productService.save(this.productFormGroup.value)
      .subscribe(data => {
        alert("success, the product is saved!!");
      });

  }
}
