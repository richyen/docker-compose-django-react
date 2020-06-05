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
  const [languageToSetGlobally, setLanguageToSetGlobally] = useState('English');

  const retrieveLanguage = (event, data) => {
    setLanguageToDisplay(event.currentTarget.value);

    // TODO: Should set language globally in some kind of context provider
    setLanguageToSetGlobally(data.value);
    console.log(
      `fire async process to change content to ${languageToSetGlobally} for blog post, but also react components`
    );
  };

  return (
    <Dropdown
      button
      className="icon small"
      floating
      labeled
      icon="world"
      options={languageOptions}
      text={languageToDisplay}
      onChange={retrieveLanguage}
    />
  );
};

export default LanguageList;
