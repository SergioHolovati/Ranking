import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalMatchComponent } from './modalMatch.component';

describe('ModalComponent', () => {
  let component: ModalMatchComponent;
  let fixture: ComponentFixture<ModalMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalMatchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
