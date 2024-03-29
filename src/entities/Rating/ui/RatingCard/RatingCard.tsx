import { useTranslation } from 'react-i18next';
import { memo, useCallback, useState } from 'react';
import { Text } from 'shared/ui/Text/Text';
import { Input } from 'shared/ui/Input/Input';
import { Card } from 'shared/ui/Card/Card';
import { HStack, VStack } from 'shared/ui/Stack';
import { StarRating } from 'shared/ui/StarRating/StarRating';
import { Drawer } from 'shared/ui/Drawer/Drawer';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';
import { classNames } from 'shared/lib/classNames/classNames';
import { useDevice } from 'shared/lib/hooks/useDevice/useDevice';
// import styles from './RatingCard.module.scss';

interface RatingCardProps {
  className?: string;
  title?: string;
  feedbackTitle?: string;
  hasFeedback?: boolean;
  onCancel?: (starsCount: number) => void;
  onAccept?: (starsCount: number, feedback?: string) => void;
  rate?: number;
}

export const RatingCard = memo((props: RatingCardProps) => {
  const {
    className,
    onAccept,
    feedbackTitle,
    hasFeedback,
    onCancel,
    title,
    rate = 0,
  } = props;
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [starsCount, setStarsCount] = useState(rate);
  const [feedback, setFeedback] = useState('');
  const isMobile = useDevice();

  const onSelectStars = useCallback(
    (selectedStarsCount: number) => {
      setStarsCount(selectedStarsCount);
      if (hasFeedback) {
        setIsModalOpen(true);
      } else {
        onAccept?.(selectedStarsCount);
      }
    },
    [hasFeedback, onAccept],
  );

  const acceptHandle = useCallback(() => {
    setIsModalOpen(false);
    onAccept?.(starsCount, feedback);
  }, [feedback, onAccept, starsCount]);

  const cancelHandle = useCallback(() => {
    setIsModalOpen(false);
    onCancel?.(starsCount);
  }, [onCancel, starsCount]);

  const modalContent = (
    <>
      <Text title={feedbackTitle} />
      <Input
        value={feedback}
        onChange={setFeedback}
        placeholder={t('Your feedback')}
      />
    </>
  );

  return (
    <Card className={classNames('', {}, [className])}>
      <VStack align="center" gap="8">
        <Text title={title} />
        <StarRating
          selectedStars={starsCount}
          size={40}
          onSelect={onSelectStars}
        />
      </VStack>
      {!isMobile ? (
        <Modal isOpen={isModalOpen} lazy>
          <VStack max gap="32">
            {modalContent}
            <HStack max gap="16" justify="end">
              <Button onClick={cancelHandle} theme={ButtonTheme.OUTLINE_RED}>
                {t('Close')}
              </Button>
              <Button onClick={acceptHandle}>{t('Send')}</Button>
            </HStack>
          </VStack>
        </Modal>
      ) : (
        <Drawer isOpen={isModalOpen} lazy onClose={cancelHandle}>
          <VStack gap="32">
            {modalContent}
            <Button fullWidth onClick={acceptHandle} size={ButtonSize.L}>
              {t('Send')}
            </Button>
          </VStack>
        </Drawer>
      )}
    </Card>
  );
});
