import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnotherSecretComponent } from './another-secret.component';

describe('AnotherSecretComponent', () => {
  let component: AnotherSecretComponent;
  let fixture: ComponentFixture<AnotherSecretComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnotherSecretComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnotherSecretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
