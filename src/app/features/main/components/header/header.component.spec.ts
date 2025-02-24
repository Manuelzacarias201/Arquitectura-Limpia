import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeader } from './header.component';

describe('HeaderComponent', () => {
  let component: MainHeader;
  let fixture: ComponentFixture<MainHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
