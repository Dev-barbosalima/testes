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
    const html = fixture.nativeElement as HTMLElement;
    const textArea = html.querySelector('[data_test-textArea]') as HTMLTextAreaElement;
    //#endregion

    //#region ACTIONS
    // fill with actions
    //#endregion

    //#region ASSERTIONS
    expect(textArea.value).toBe('');
    //#endregion
  });

  it('should accept until 250 characters', () => {
    //#region ARRANGES
    const html = fixture.nativeElement as HTMLElement;
    const textArea = html.querySelector('[data_test-textArea]') as HTMLTextAreaElement;
    //#region mockValue
    const mockValue = 'testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes testes teste teste testes;'
    //#endregion
    //#endregion

    //#region ACTIONS
    textArea.value = mockValue;
    //#endregion

    //#region ASSERTIONS
    expect(textArea.value.length).toBeLessThanOrEqual(250);
    //#endregion
  });
});
