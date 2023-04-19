import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleList } from 'entities/Article';
import { Text, TextSize } from 'shared/ui/Text/Text';
import { VStack } from 'shared/ui/Stack';
import { useArticleRecommendationsList } from 'features/articleRecommendationsList/api/articleRecommendationsApi';

interface ArticleRecommendationsListProps {
  className?: string;
}

export const ArticleRecommendationsList = memo(
  (props: ArticleRecommendationsListProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const {
      isLoading,
      error,
      data: articles,
    } = useArticleRecommendationsList(3);
    console.log('!', articles);
    if (isLoading || error) {
      return null;
    }
    return (
      <VStack gap='8' className={classNames('', {}, [className])}>
        <Text size={TextSize.L} title={t('Recommendations')} />
        {articles && <ArticleList articles={articles} target='_blank' />}
      </VStack>
    );
  }
);
