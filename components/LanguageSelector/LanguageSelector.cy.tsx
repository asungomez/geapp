/// <reference types="cypress" />
import { LanguageSelector, localeConfiguration } from './LanguageSelector';
import * as NextRouter from 'next/router';

const labels = Object.values(localeConfiguration).map(({ label }) => label);

const assertMenuClosed = () => {
  for (const label of labels) {
    cy.findByText(label).should('not.exist');
  }
};

const assertMenuOpen = () => {
  for (const label of labels) {
    cy.findByText(label);
  }
};

const mountComponent = (currentLocale = 'es', push = cy.spy()) => {
  cy.stub(NextRouter, 'useRouter').returns({
    locale: currentLocale,
    locales: ['es', 'en'],
    push,
    pathname: '/',
    query: {},
    asPath: '/',
  });
  cy.mount(<LanguageSelector />);
};

describe('LanguageSelector.cy.ts', () => {
  it('does not display the menu by default', () => {
    mountComponent();
    assertMenuClosed();
  });

  it('toggles the menu when clicking the button', () => {
    mountComponent();
    const toggler = cy.findByRole('button');
    toggler.click();
    assertMenuOpen();
    toggler.click({ force: true });
    assertMenuClosed();
  });

  for (const locale in localeConfiguration) {
    const { label } = localeConfiguration[locale];
    it(`shows the ${label} option selected when the current locale is ${locale}`, () => {
      mountComponent(locale);
      const toggler = cy.findByRole('button');
      toggler.click();
      const selectedOption = cy.findByText(label).closest('[role=menuitem]');
      selectedOption.should('have.class', 'Mui-selected');
    });
  }

  it('fires an event with the new locale when clicking an option', () => {
    const routerPush = cy.spy().as('routerPush');
    mountComponent('es', routerPush);
    const toggler = cy.findByRole('button');
    toggler.click();
    cy.findByText('English').click();
    cy.get('@routerPush').should(
      'have.been.calledWith',
      {
        pathname: '/',
        query: {},
      },
      '/',
      { locale: 'en' },
    );
  });
});
