import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

const languageOptions = [
  { key: 'English', text: 'English', value: 'English' },
  { key: 'Chinese', text: '中文', value: 'Chinese' },
  { key: 'Japanese', text: '日本語', value: 'Japanese' },
  { key: 'Korean', text: '한국어', value: 'Korean' },
  { key: 'Vietnamese', text: 'Tiếng Việt', value: 'Vietnamese' }
];

const LanguageList = () => {
  const [languageToDisplay, setLanguageToDisplay] = useState('English');
  const [languageToSendBackend, setLanguageToSendBackend] = useState('English');

  const retrieveLanguage = (event, data) => {
    setLanguageToDisplay(event.currentTarget.value);

    // TODO: Should set language globally in some kind of context provider
    setLanguageToSendBackend(data.value);
    console.log(`fire async process to change content to ${data.value}`);
  };

  const style = {
    languageDropdown: {
      padding: '6px'
    }
  };

  return (
    <Dropdown
      button
      className="icon mini"
      floating
      labeled
      icon="world"
      options={languageOptions}
      search
      text={languageToDisplay}
      onChange={retrieveLanguage}
      style={style.languageDropdown}
    />
  );
};

export default LanguageList;
