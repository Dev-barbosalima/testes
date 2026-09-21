import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Status } from './status';

describe('Status', () => {
  let component: Status;
  let fixture: ComponentFixture<Status>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Status],
    }).compileComponents();

    fixture = TestBed.createComponent(Status);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  describe('Behavior', () => {
    it('should initialize the value as "pendente"', () => {
      //#region ARRANGES
      const html = fixture.nativeElement as HTMLElement;
      const select = html.querySelector('[data_test-select]') as HTMLSelectElement;
      //#endregion

      //#region ACTIONS
      // fill with actions
      //#endregion

      //#region ASSERTIONS
      expect(select.value).toBe('pendente');
      //#endregion
    });

    it('should have the value "realizada"', () => {
      //#region ARRANGES
      const html = fixture.nativeElement as HTMLElement;
      const select = html.querySelector('[data_test-select]') as HTMLSelectElement;
      const expectValue = 'realizada';
      //#endregion

      //#region ACTIONS
      let hasTheOptionRealizada = false;
      for (let index = 0; index < select.options.length; index++) {
        const option = select.options.item(index);
        if (option?.value == expectValue) {
          hasTheOptionRealizada = true;
          continue;
        };
      }
      //#endregion

      //#region ASSERTIONS
      expect(hasTheOptionRealizada).toBeTruthy()
      //#endregion
    });
  });

  it('should have a OptionSelected property into component', () => {
    //#region ARRANGES
    // fill with arranges
    //#endregion

    //#region ACTIONS
    // fill with actions
    //#endregion

    //#region ASSERTIONS
    expect(component).haveOwnProperty('OptionSelected')
    //#endregion
  });
});

