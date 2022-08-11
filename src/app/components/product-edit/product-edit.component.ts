import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';



@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId:number;
  productFormGroup:FormGroup;
  public submitted:boolean=false;
  id:number;
  constructor(private activatedRoute:ActivatedRoute,private productsService:ProductsService,private fb:FormBuilder) 
  { 
   this.productId=activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
this.productsService.getProduct(this.productId).subscribe(product=>{
this.productFormGroup=this.fb.group({
  id:[product.id,Validators.required],
 name:[product.name,Validators.required],
  price:[product.price,Validators.required],
  quantity:[product.quantity,Validators.required],
  selected:[product.selected,Validators.required],
  available:[product.available,Validators.required]

})
});
}

onUpdateProduct(){
  if(this.productFormGroup.valid){
    this.productsService.updateProducts(this.productFormGroup.value).subscribe(data=>{
    alert("Successful update!");
    });
  }
  else{
    alert("Formulaire invalide");
  }
  }
}
