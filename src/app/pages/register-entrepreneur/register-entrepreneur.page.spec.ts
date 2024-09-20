import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegisterEntrepreneurPage } from './register-entrepreneur.page';

describe('RegisterEntrepreneurPage', () => {
  let component: RegisterEntrepreneurPage;
  let fixture: ComponentFixture<RegisterEntrepreneurPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterEntrepreneurPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
