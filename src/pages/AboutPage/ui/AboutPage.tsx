import { Counter } from 'entities/Counter';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page>
      {t('About page')}
      <Counter />
    </Page>
  );
});
export default AboutPage;
