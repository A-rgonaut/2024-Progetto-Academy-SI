import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TmpFormComponent } from './tmp-form.component';

describe('TmpFormComponent', () => {
  let component: TmpFormComponent;
  let fixture: ComponentFixture<TmpFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TmpFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TmpFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
