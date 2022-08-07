import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from 'src/app/components/products/products.component';
import { HomeComponent } from 'src/app/components/home/home.component';
import { ProductAddComponent } from 'src/app/components/product-add/product-add.component';
import { ProductEditComponent } from 'src/app/components/product-edit/product-edit.component';


const routes: Routes = [
{path:"products",component:ProductsComponent},
{path:"newProduct",component:ProductAddComponent},
{path:"",component:HomeComponent},
{path:"editProduct/:id",component:ProductEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
