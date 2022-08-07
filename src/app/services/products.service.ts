import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/model/product.model';
import {Observable} from 'node_modules/rxjs/dist/types/internal/Observable';
//import { json } from 'node:stream/consumers';

let host=environment.host;
@Injectable({providedIn:"root"})
export class ProductsService{
constructor(private http:HttpClient){

}

getAllProducts():Observable<Product[]>{
     return this.http.get<Product[]>(host +"/products");
}
getSelectedProducts():Observable<Product[]>{
    
     return this.http.get<Product[]>(host +"/products?selected=true");
}
getAvailableProducts():Observable<Product[]>{
     return this.http.get<Product[]>(host +"/products?available=true");
}
searchProducts(keyword:string):Observable<Product[]>{
     return this.http.get<Product[]>(host +"/products?name_like="+keyword);
}
selectProducts(product:Product):Observable<Product>{
    product.selected=!product.selected;
     return this.http.put<Product>(host +"/products/"+product.id,product);
}
deleteProducts(product:Product):Observable<void>{
    product.selected=!product.selected;
     return this.http.delete<void>(host +"/products/"+product.id);
}

save(product:Product):Observable<Product>{
     return this.http.post<Product>(host +"/products",product);
}
getProduct(id:number):Observable<Product>{
     return this.http.get<Product>(host +"/products/"+ id);
}
updateProducts(product:Product):Observable<Product>{
     return this.http.put<Product>(host +"/products/" +product.id,product);
}
}
