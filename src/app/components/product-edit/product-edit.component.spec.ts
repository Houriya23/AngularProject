import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';
import { ProductEditComponent } from './product-edit.component';
import { RouterTestingModule } from "@angular/router/testing";
import { RouterModule } from '@angular/router';

describe('ProductEditComponent', () => {
  
  let component: ProductEditComponent;
  let fixture: ComponentFixture<ProductEditComponent>;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule, HttpClientModule, RouterModule.forRoot([])],
      declarations: [ProductEditComponent]
    })
      .compileComponents();
    // create component and test fixture
    fixture = TestBed.createComponent(ProductEditComponent);
    // get test component from the fixture
    component = fixture.componentInstance;
    component.ngOnInit();
  });

  //testing if the form is empty
  it('form invalid when empty', () => {
    expect(component.productFormGroup?.valid).toBeFalsy();
  });


////////////////////////////////validity of id///////////////////////////////////
it('id field validity', () => {
  
  let errors = {};
  let id = component.productFormGroup?.controls['id'];
  if(id === undefined) {return}
  expect(id.valid).toBeTruthy();

  //id field is required
  errors = id.errors || {};
  expect(errors['required']).toBeFalsy();

  // Set id to something
  id.setValue(11);
  errors = id.errors || {};
  expect(errors['required']).toBeFalsy();

  // Set id to something correct
  id.setValue(11);
  errors = id.errors || {};
  expect(errors['required']).toBeFalsy();


  id.setValue(12);
  expect(id.value).toBeGreaterThan(5);
  expect(id.value).toBeGreaterThanOrEqual(12);
  expect(id.value).toBeLessThan(20);
  expect(id.value).toBe(12);
  expect(id.value).toBeTruthy();
  expect(id.value).not.toBeNull();
});



  /////////////////////////validity of name//////////////////////////////////////////////////
  it('name field validity', () => {
    
    let errors = {};
    let name = component.productFormGroup?.controls['name'];
    if(name === undefined) {return}
    expect(name.valid).toBeTruthy();

    // name field is required
    errors = name.errors || {};
    expect(errors['required']).toBeTruthy();


    // Set name to something
    name.setValue(11);
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeTruthy();

    // Set name to something correct
    name.setValue("Houria");
    errors = name.errors || {};
    expect(errors['required']).toBeFalsy();
    expect(errors['pattern']).toBeFalsy();
  });
  ////////////////////////////////validity of price///////////////////////////////////
  it('price field validity', () => {
    let errors = {};
    let price = component.productFormGroup?.controls['price'];
    if(price === undefined) {return}
    expect(price.valid).toBeTruthy();

    // price field is required
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set name to something
    price.setValue('11');
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set name to something correct
    price.setValue(11);
    errors = price.errors || {};
    expect(errors['required']).toBeFalsy();


    price.setValue(1111);
    expect(price.value).toBeGreaterThan(5);
    expect(price.value).toBeGreaterThanOrEqual(1110);
    expect(price.value).toBeLessThan(2222);
    expect(price.value).toBe(1111);
    expect(price.value).toBeTruthy();
    expect(price.value).not.toBeNull();
  });
  ///////////////////////////////validity of quantity///////////////////////////
  it('quantity field validity', () => {
    let errors = {};
    let quantity = component.productFormGroup?.controls['quantity'];
    if(quantity === undefined) {return}
    expect(quantity.valid).toBeTruthy();

    // quantity field is required
    errors = quantity.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something
    quantity.setValue('11');
    errors = quantity.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something correct
    quantity.setValue(1);
    errors = quantity.errors || {};
    expect(errors['required']).toBeFalsy();


    quantity.setValue(4);
    expect(quantity.value).toBeGreaterThan(1);
    expect(quantity.value).toBeGreaterThanOrEqual(4);
    expect(quantity.value).toBeLessThan(5);
    expect(quantity.value).toBe(4);
    expect(quantity.value).toBeTruthy();
    expect(quantity.value).not.toBeNull();
  });

  ///////////////////////////validity of selected////////////////////////////////
  it('selected field validity', () => {
    let errors = {};
    let selected = component.productFormGroup?.controls['selected'];
    if(selected === undefined) {return}
    expect(selected.valid).toBeTruthy();

    // quantity field is required
    errors = selected.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something
    selected.setValue('11');
    errors = selected.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something correct
    selected.setValue(false);
    errors = selected.errors || {};
    expect(errors['required']).toBeFalsy();


    selected.setValue(true);
    expect(selected.value).toBe(true);

  });

  ///////////////////////////validity of available////////////////////////////////
  it('available field validity', () => {
    let errors = {};
    let available = component.productFormGroup?.controls['available'];
    if(available === undefined) {return}
    expect(available.valid).toBeTruthy();

    // quantity field is required
    errors = available.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something
    available.setValue('11');
    errors = available.errors || {};
    expect(errors['required']).toBeFalsy();

    // Set quantity to something correct
    available.setValue(false);
    errors = available.errors || {};
    expect(errors['required']).toBeFalsy();


    available.setValue(true);
    expect(available.value).toBe(true);

  });

  it('detecting errors in the onUpdateProduct()', () => {
    expect(component.productFormGroup?.valid).toBeFalsy();
    component.productFormGroup?.controls['id'].setValue(11);
    component.productFormGroup?.controls['name'].setValue("ameni");
    component.productFormGroup?.controls['price'].setValue(11);
    component.productFormGroup?.controls['quantity'].setValue(1);
    component.productFormGroup?.controls['selected'].setValue(false);
    component.productFormGroup?.controls['available'].setValue(true);
    if(component.productFormGroup?.valid === undefined) {return}
    expect(component.productFormGroup?.valid).toBeTruthy();

  

  });
  it('onUpdateProduct() should return null',()=>{
    expect(component.onUpdateProduct()).toBeNull;

  });


})


