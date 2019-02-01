import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablasSocketComponent } from './tablas-socket.component';

describe('TablasSocketComponent', () => {
  let component: TablasSocketComponent;
  let fixture: ComponentFixture<TablasSocketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablasSocketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablasSocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
