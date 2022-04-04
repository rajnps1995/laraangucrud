import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdaddemployeeComponent } from './edaddemployee.component';

describe('EdaddemployeeComponent', () => {
  let component: EdaddemployeeComponent;
  let fixture: ComponentFixture<EdaddemployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdaddemployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdaddemployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
