import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HasfavsComponent } from './hasfavs.component';

describe('HasfavsComponent', () => {
  let component: HasfavsComponent;
  let fixture: ComponentFixture<HasfavsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HasfavsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HasfavsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
