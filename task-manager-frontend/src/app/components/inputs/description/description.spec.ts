import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Description } from './description';

describe('Description', () => {
  let component: Description;
  let fixture: ComponentFixture<Description>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Description],
    }).compileComponents();

    fixture = TestBed.createComponent(Description);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should initialize without value', () => {
    //#region ARRANGES
    //#endregion

    //#region ACTIONS
    //#endregion

    //#region ASSERTIONS
    expect(component.form.value).toBe('');
    //#endregion
  });

  it('should accept until 250 characters', () => {
    //#region ARRANGES
    const mockValue = 'a'.repeat(250);
    //#endregion

    //#region ACTIONS
    component.form.setValue(mockValue);
    //#endregion

    //#region ASSERTIONS
    expect((component.form.value as string).length).toBeLessThanOrEqual(250);
    expect(component.form.valid).toBeTruthy();
    //#endregion
  });
});
