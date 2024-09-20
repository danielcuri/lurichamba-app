import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuRegisterPage } from './menu-register.page';

describe('MenuRegisterPage', () => {
  let component: MenuRegisterPage;
  let fixture: ComponentFixture<MenuRegisterPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRegisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
