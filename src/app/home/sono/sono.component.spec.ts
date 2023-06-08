import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SonoComponent } from './sono.component';

describe('SonoComponent', () => {
  let component: SonoComponent;
  let fixture: ComponentFixture<SonoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SonoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SonoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
