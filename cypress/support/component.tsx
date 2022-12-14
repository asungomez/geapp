/// <reference types="cypress" />
// ***********************************************************
// This example support/component.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands using ES2015 syntax:
import './commands';

import { mount } from 'cypress/react18';
import { ThemeProvider } from '@mui/material';
import { theme } from '../../styles/theme';

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

Cypress.Commands.add('mount', (component: React.ReactNode, options) =>
  mount(<ThemeProvider theme={theme}>{component}</ThemeProvider>, options),
);
