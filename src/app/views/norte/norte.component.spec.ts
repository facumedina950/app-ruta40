import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NorteComponent } from './norte.component';

describe('NorteComponent', () => {
  let component: NorteComponent;
  let fixture: ComponentFixture<NorteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NorteComponent]
    });
    fixture = TestBed.createComponent(NorteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
