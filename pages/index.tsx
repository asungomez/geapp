import type { GetServerSideProps, NextPage } from 'next';
import { Typography } from '@mui/material';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

const Home: NextPage = () => {
  const { t } = useTranslation();
  return <Typography>{t('greeting')}</Typography>;
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  let props = {};
  if (locale) {
    const i18nProps = await serverSideTranslations(locale, ['common'], {
      i18n: {
        defaultLocale: 'es',
        locales: ['en', 'es'],
      },
    });
    props = {
      ...props,
      ...i18nProps,
    };
  }
  return { props };
};

export default Home;
