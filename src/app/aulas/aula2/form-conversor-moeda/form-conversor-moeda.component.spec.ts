import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormConversorMoedaComponent } from './form-conversor-moeda.component';

describe('FormConversorMoedaComponent', () => {
  let component: FormConversorMoedaComponent;
  let fixture: ComponentFixture<FormConversorMoedaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormConversorMoedaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormConversorMoedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
