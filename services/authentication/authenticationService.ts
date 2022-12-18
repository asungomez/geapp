import { Auth } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

export const getAuthenticatedUser = async () => {
  const user = await Auth.currentAuthenticatedUser();
  return user;
};

export const logIn = async () => {
  const credentials = await Auth.federatedSignIn({
    provider: 'Google' as CognitoHostedUIIdentityProvider,
  });
  return credentials;
};

export const logOut = async () => {
  await Auth.signOut();
};
