import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookRegisterComponent } from './book-register.component';

describe('BookRegisterComponent', () => {
  let component: BookRegisterComponent;
  let fixture: ComponentFixture<BookRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookRegisterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BookRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
