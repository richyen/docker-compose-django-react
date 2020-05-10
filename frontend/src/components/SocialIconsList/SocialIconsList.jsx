import React from 'react'
import { Button } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const SocialIconList = () => {

  const socialMediaList = ['facebook', 'twitter', 'instagram', 'youtube', 'wechat'];

  const style = {
    iconContainer: {
      margin: "2%"
    },
    icons: {
      margin: "2%"
    }
  }

  const socialMediaIconList = socialMediaList.map((iconName, index)=>{
    return (
      <div key={index} style={style.iconContainer}>
          <Button bordered color={iconName} icon={iconName} />
      </div>
    )
  })

  return (
    <Button.Group horizontal size="mini">
       {socialMediaIconList}
    </Button.Group>
  )
}

export default SocialIconList