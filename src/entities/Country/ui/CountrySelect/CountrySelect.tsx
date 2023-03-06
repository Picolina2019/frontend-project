import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Select } from 'shared/ui/Select/Select';
import { memo, useCallback } from 'react';
import { Country } from '../../model/types/country';

interface CountrySelectProps {
  className?: string;
  value?: Country;
  onChange?: (value: Country) => void;
  readonly?: boolean;
}

const options = [
  { value: Country.Sweden, content: Country.Sweden },
  { value: Country.Denmark, content: Country.Denmark },
  { value: Country.Germany, content: Country.Germany },
];

export const CountrySelect = memo(
  ({ className, value, onChange, readonly }: CountrySelectProps) => {
    const { t } = useTranslation();

    const onChangeHandler = useCallback(
      (value: string) => {
        onChange?.(value as Country);
      },
      [onChange],
    );

    return (
      <Select
          className={classNames('', {}, [className])}
          label={t('Country')}
          options={options}
          value={value}
          onChange={onChangeHandler}
          readonly={readonly}
      />
    );
  }
);
