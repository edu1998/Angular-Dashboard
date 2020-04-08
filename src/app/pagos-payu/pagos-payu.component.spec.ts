import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosPayuComponent } from './pagos-payu.component';

describe('PagosPayuComponent', () => {
  let component: PagosPayuComponent;
  let fixture: ComponentFixture<PagosPayuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosPayuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosPayuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
