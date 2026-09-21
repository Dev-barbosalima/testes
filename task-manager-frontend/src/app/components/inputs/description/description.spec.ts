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

  describe('Behavior', () => {
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

    it('should not accept more than 250 characters', () => {
      //#region ARRANGES
      const mockValue = `a`.repeat(251);
      //#endregion

      //#region ACTIONS
      component.form.setValue(mockValue);
      //#endregion

      //#region ASSERTIONS
      expect(component.form.valid).toBeFalsy()
      //#endregion
    });
  });

  describe('UI', () => {
    it('should renders description input', () => {
      //#region ARRANGES
      const html = fixture.nativeElement as HTMLElement;
      const textAreaDescription = html.querySelector('[data_test-textAreaDescription]') as HTMLTextAreaElement;
      //#endregion

      //#region ACTIONS
      //#endregion

      //#region ASSERTIONS
      expect(textAreaDescription).not.toBeNull()
      //#endregion
    });
  });
});
