import { Counter } from 'entities/Counter';
import { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Page } from 'widgets/Page/Page';

const MainPage = memo(() => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const valueOnChange = (val: string) => {
    setValue(val);
  };
  return (
    <Page data-testid="MainPage">
      {t('main page')}

      <Input
        autoFocus
        // eslint-disable-next-line i18next/no-literal-string
        placeholder="Enter message"
        onChange={valueOnChange}
        value={value}
      />
      <span>{value}</span>
      <Counter />
    </Page>
  );
});
export default MainPage;
