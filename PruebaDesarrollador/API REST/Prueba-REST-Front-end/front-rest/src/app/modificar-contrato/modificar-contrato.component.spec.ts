import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContratoComponent } from './modificar-contrato.component';

describe('ModificarContratoComponent', () => {
  let component: ModificarContratoComponent;
  let fixture: ComponentFixture<ModificarContratoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarContratoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarContratoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
