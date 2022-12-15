import awsConfig from '../aws-exports';
import { Amplify } from 'aws-amplify';

const [localSignInEnglish, productionRedirectSignIn, localSignInSpanish] =
  awsConfig.oauth.redirectSignIn.split(',');
const [localSignOutEnglish, productionRedirectSignOut, localSignOutSpanish] =
  awsConfig.oauth.redirectSignOut.split(',');

const redirects = {
  local: {
    es: {
      signIn: localSignInSpanish,
      signOut: localSignOutSpanish,
    },
    en: {
      signIn: localSignInEnglish,
      signOut: localSignOutEnglish,
    },
  },
  production: {
    es: {
      signIn: productionRedirectSignIn,
      signOut: productionRedirectSignOut,
    },
    en: {
      signIn: productionRedirectSignIn,
      signOut: productionRedirectSignOut,
    },
  },
};

export const configureAmplify = (locale: 'es' | 'en' = 'es') => {
  const isLocalhost = !!process.env.NEXT_PUBLIC_LOCAL;

  const environment = isLocalhost ? 'local' : 'production';
  const { signIn, signOut } = redirects[environment][locale];
  const updatedAwsConfig = {
    ...awsConfig,
    oauth: {
      ...awsConfig.oauth,
      redirectSignIn: signIn,
      redirectSignOut: signOut,
    },
  };
  Amplify.configure(updatedAwsConfig);
};
