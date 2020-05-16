import React from 'react';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const SocialIconList = () => {
  const socialMediaList = [
    'facebook',
    'twitter',
    'instagram',
    'youtube',
    'wechat'
  ];
  const socialMediaColors = [
    'facebook',
    'twitter',
    'instagram',
    'youtube',
    'green'
  ];

  const style = {
    iconContainer: {
      margin: '2%'
    },
    icons: {
      margin: '2%'
    }
  };

  const socialMediaIconList = socialMediaList.map((iconName, index) => {
    return (
      <div key={index} style={style.iconContainer}>
        <Button
          bordered="true"
          color={socialMediaColors[index]}
          icon={iconName}
        />
      </div>
    );
  });

  return (
    <Button.Group horizontal="true" size="mini">
      {socialMediaIconList}
    </Button.Group>
  );
};

export default SocialIconList;
