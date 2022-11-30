import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui/Button/Button';

// to test ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();
  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error === true) {
      throw new Error();
    }
  }, [error]);
  return <Button onClick={onThrow}>{t('error')}</Button>;
};
