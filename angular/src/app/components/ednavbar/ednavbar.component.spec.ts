import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdnavbarComponent } from './ednavbar.component';

describe('EdnavbarComponent', () => {
  let component: EdnavbarComponent;
  let fixture: ComponentFixture<EdnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdnavbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
