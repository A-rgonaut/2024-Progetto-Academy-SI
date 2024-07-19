import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksLanguageComponent } from './links-language.component';

describe('LinksLanguageComponent', () => {
  let component: LinksLanguageComponent;
  let fixture: ComponentFixture<LinksLanguageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LinksLanguageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksLanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
