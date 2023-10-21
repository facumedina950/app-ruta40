import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuyoComponent } from './cuyo.component';

describe('CuyoComponent', () => {
  let component: CuyoComponent;
  let fixture: ComponentFixture<CuyoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CuyoComponent]
    });
    fixture = TestBed.createComponent(CuyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
