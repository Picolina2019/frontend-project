import { memo, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = memo(() => {
  const { t } = useTranslation();
  const [value, setValue] = useState('');
  const valueOnChange = (val: string) => {
    setValue(val);
  };
  return (
    <div>
      {t('main page')}

      <Input
        autoFocus
        // eslint-disable-next-line i18next/no-literal-string
        placeholder='Enter message'
        onChange={valueOnChange}
        value={value}
      />
      <span>{value}</span>
    </div>
  );
});
export default MainPage;
