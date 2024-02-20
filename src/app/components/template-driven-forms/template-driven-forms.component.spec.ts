import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TemplateDrivenFormsComponent } from './template-driven-forms.component';

describe('TemplateDrivenFormsComponent', () => {
  let fixture: ComponentFixture<TemplateDrivenFormsComponent>;
  let component: TemplateDrivenFormsComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateDrivenFormsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateDrivenFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
