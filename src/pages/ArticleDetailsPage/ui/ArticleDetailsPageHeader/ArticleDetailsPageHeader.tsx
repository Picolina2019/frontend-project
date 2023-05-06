import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
import { getRouteArticleEdit, getRouteArticles } from 'shared/config/routeConfig/routeConfig';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { getUserAuthData } from 'entities/User';
import { getArticleDetailsData } from 'entities/Article';
import { getCanEditArticle } from 'pages/ArticleDetailsPage/model/selectors/article';
import { useSelector } from 'react-redux';
import styles from './ArticleDetailsPageHeader.module.scss';

interface ArticleDetailsPageHeaderProps {
  className?: string;
}

export const ArticleDetailsPageHeader = ({
  className,
}: ArticleDetailsPageHeaderProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = useSelector(getUserAuthData);
  const article = useSelector(getArticleDetailsData);
  const canEdit = useSelector(getCanEditArticle);

  const onBackToList = useCallback(() => {
    navigate(getRouteArticles());
  }, [navigate]);
  const onEditArticle = useCallback(() => {
    if (article) {
      navigate(getRouteArticleEdit(article.id));
    }
  }, [article, navigate]);

  return (
    <div
      className={classNames(styles.ArticleDetailsPageHeader, {}, [className])}>
      <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
        {t('Back to list')}
      </Button>
      {canEdit && (
        <Button
          className={styles.editBtn}
          theme={ButtonTheme.OUTLINE}
          onClick={onEditArticle}>
          {t('Edit')}
        </Button>
      )}
    </div>
  );
};
