import { RatingCard } from 'entities/Rating';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Page } from 'widgets/Page/Page';

const AboutPage = memo(() => {
  const { t } = useTranslation();

  return (
    <Page data-testid='AboutPage'>
      {t('About page')}

      <RatingCard
        hasFeedback
        title={t('your opinion')}
        feedbackTitle={t('Leave your opinion')}
      />
    </Page>
  );
});
export default AboutPage;
