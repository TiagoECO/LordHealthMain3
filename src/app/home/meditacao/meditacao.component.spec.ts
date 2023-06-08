import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeditacaoComponent } from './meditacao.component';

describe('MeditacaoComponent', () => {
  let component: MeditacaoComponent;
  let fixture: ComponentFixture<MeditacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeditacaoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeditacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
