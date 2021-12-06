import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecuconnectAngularSdkComponent } from './secuconnect-angular-sdk.component';

describe('SecuconnectAngularSdkComponent', () => {
  let component: SecuconnectAngularSdkComponent;
  let fixture: ComponentFixture<SecuconnectAngularSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecuconnectAngularSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecuconnectAngularSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
