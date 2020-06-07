import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

const languageOptions = [
  { key: 'English', text: 'English', value: 'en' },
  { key: 'Chinese', text: '中文', value: 'zh' },
  { key: 'Japanese', text: '日本語', value: 'ja' },
  { key: 'Korean', text: '한국어', value: 'ko' },
  { key: 'Vietnamese', text: 'Tiếng Việt', value: 'vi' }
];

const LanguageList = () => {
  const { i18n } = useTranslation();

  const defaultSetLang = i18n.language;
  const [langValue, setLangValue] = useState(defaultSetLang);

  const selectLanguage = (e, data) => {
    setLangValue(data.value);
    i18n.changeLanguage(data.value);
  };

  return (
    <Dropdown
      button
      className="icon small"
      floating
      labeled
      icon="world"
      options={languageOptions}
      value={langValue}
      onChange={selectLanguage}
    />
  );
};

export default LanguageList;
