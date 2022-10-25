const languageCodes = ['es', 'en'] as const;
type LanguageCode = typeof languageCodes[number];
const assertLanguage = (language: LanguageCode) => {
  const content = language === 'en' ? 'Welcome to GEApp' : 'Bienvenido a GEApp';
  cy.contains(content);
};

const languages: { code: LanguageCode; label: string }[] = [
  { code: 'es', label: 'Español' },
  { code: 'en', label: 'English' },
];

describe('Internationalization', () => {
  describe('First visit at the site', () => {
    it('displays the site in spanish by default', () => {
      cy.visit('/');
      assertLanguage('es');
    });

    languages.forEach(({ code, label }) => {
      it(`displays the page in ${label} when visiting the URL /${code}`, () => {
        cy.visit(`/${code}`);
        assertLanguage(code);
      });
    });
  });

  describe('Changing the locale', () => {
    it('changes the language of the UI', () => {
      cy.visit('/es');
      cy.findByRole('button').click();
      cy.findByText('English').click();
      assertLanguage('en');
    });
  });
});
export {};
