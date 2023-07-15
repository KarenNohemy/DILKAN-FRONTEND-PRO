import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaDeCodigoComponent } from './area-de-codigo.component';

describe('AreaDeCodigoComponent', () => {
  let component: AreaDeCodigoComponent;
  let fixture: ComponentFixture<AreaDeCodigoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaDeCodigoComponent]
    });
    fixture = TestBed.createComponent(AreaDeCodigoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
