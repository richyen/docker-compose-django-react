import React from "react";
//import { Link } from "react-router-dom";
import {
  Button,
} from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'

const style = {
  headerContainer: {
    padding: "5px 5%"
  },
  
  subContainer: {
    display: "grid",
    height: 30,
    padding: 0,
    margin: 0,
    gridTemplateColumns: "1fr 1fr",
    // border: "red 1px solid"
  },

  mainContainer: {
    display: "grid",
    gridTemplateColumns: "100px 1fr",
    alignItems: "center",
    paddingTop: 15,
    height: 65,
    // border: "red 1px solid",
  },

  langContainer: {
    display: "flex",
    alignItems: "center",
  },

  socialContainer:{
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },

  linkContainer: {
    minWidth: 600,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    // border: "red 1px solid"
  },

  button: {
    padding: "0 8px",
    height: 40,
    marginLeft: 20,
    background: "none",
    border: "gray 1px solid"
  },

  icon: {
    background: "none"
  }
}

const links = ["ABOUT","WHY MENTORS","PROGRAM","BLOG","CONTACT"];
const languages = ["EN", "中文", "한국어", "日本語"];
const socialIcons = ["circle", "circle", "circle", "youtube", "wechat"];

const SubHeader = () => {
  return (
    <div style={style.subContainer}>
      <div style={style.langContainer}>
        { languages.map(lang => <a style={{paddingRight: 10}}>{lang}</a>) }
      </div>
      
      <div style={style.socialContainer}>
      { socialIcons.map(icon => <Button style={{background: "none"}} icon = {icon} />) }
      </div>
    </div>
  )
}

const MainHeader = () => {
  return (
    <div style={style.mainContainer}>
      <h1>Logo</h1>
      <div style={style.linkContainer}>
        {links.map(
          name => <a style={{padding: "0 15px"}}>{name}</a>)}
        <Button
          style = {style.button}
          compact
          content="APPLY NOW"
        />
      </div>
    </div>
  )
}

const EntireHeader = () => {
  return(
    <div style={style.headerContainer}>
      <SubHeader/>
      <MainHeader/>
    </div>
  )
}

export default EntireHeader;
