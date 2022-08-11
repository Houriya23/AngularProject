import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture:AppComponent;
  beforeEach( () => {
    fixture=new AppComponent();
  })
  it('should have a title MiniProjet',()=>{
    expect(fixture.title).toEqual('MiniProjet');
  })
}) 