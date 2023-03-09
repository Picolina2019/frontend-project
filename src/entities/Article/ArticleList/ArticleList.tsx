import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';
import { ArticleListItemSkeleton } from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

import styles from './ArticleList.module.scss';
import { Article, ArticleView } from '../model/types/article';
import { ArticleListItem } from '../ui/ArticleListItem/ArticleListItem';

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

const getSkeletons = (view: ArticleView) => new Array(view === ArticleView.SMALL ? 9 : 3)
  .fill(0)
  .map((item, index) => (
    <ArticleListItemSkeleton
        className={styles.card}
        // eslint-disable-next-line react/no-array-index-key
        key={index}
        view={view}
      />
  ));

export const ArticleList = memo((props: ArticleListProps) => {
  const { className, articles, view = ArticleView.SMALL, isLoading } = props;
  const { t } = useTranslation();

  if (isLoading) {
    return (
      <div
          className={classNames(styles.ArticleList, {}, [
            className,
            styles[view],
          ])}>
        {getSkeletons(view)}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
        article={article}
        view={view}
        className={styles.card}
        key={article.id}
    />
  );

  return (
    <div
        className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
});
