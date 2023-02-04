import { useState } from 'react';

import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const MainPage = () => {
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
        placeholder='Enter message'
        onChange={valueOnChange}
        value={value}
      />
      <span>{value}</span>
    </div>
  );
};
export default MainPage;
