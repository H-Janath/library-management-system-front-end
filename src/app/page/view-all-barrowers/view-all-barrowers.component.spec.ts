import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllBarrowersComponent } from './view-all-barrowers.component';

describe('ViewAllBarrowersComponent', () => {
  let component: ViewAllBarrowersComponent;
  let fixture: ComponentFixture<ViewAllBarrowersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAllBarrowersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewAllBarrowersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
