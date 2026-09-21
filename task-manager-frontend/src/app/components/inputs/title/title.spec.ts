import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Title } from './title';

describe('Title', () => {
  let component: Title;
  let fixture: ComponentFixture<Title>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Title],
    }).compileComponents();

    fixture = TestBed.createComponent(Title);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  describe('UI', () => {
    it('should renders input for title', () => {
      //#region ARRANGES
      const html = fixture.nativeElement as HTMLElement;
      //#endregion

      //#region ACTIONS
      const inputTitle = html.querySelector('[data_test-inputTitle]');
      //#endregion

      //#region ASSERTIONS
      expect(inputTitle).not.toBeNull();
      //#endregion
    });
  });

  describe('Behavior', () => {
    it('should accept until 150 characters', () => {
      //#region ARRANGES
      const mockValue = 'a'.repeat(150);;
      //#endregion

      //#region ACTIONS
      component.form.setValue(mockValue)
      //#endregion

      //#region ASSERTIONS
      expect(component.form.valid).toBeTruthy();
      //#endregion
    });

    it('should not accept more than 150 characters', () => {
      //#region ARRANGES
      const mockValue = 'a'.repeat(151);
      //#endregion

      //#region ACTIONS
      component.form.setValue(mockValue)
      //#endregion

      //#region ASSERTIONS
      expect(component.form.valid).toBeFalsy();
      //#endregion
    });

    it('should not accept empty', () => {
      //#region ARRANGES
      //#endregion

      //#region ACTIONS
      component.form.setValue('');
      //#endregion

      //#region ASSERTIONS
      expect(component.form.valid).toBeFalsy();
      //#endregion
    });
  });
});
