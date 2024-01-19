import React, { useEffect, useState } from "react";
import "./App.css";
import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";
import logo from './assets/logo.png';

function App() {

  const bodyStyleLight = {
    backgroundColor: "#E5E5CB", 
  };

  const bodyStyleDark = {
    backgroundColor: "#3C3C32", 
  };

  const navbarContLight = {
    "backgroundColor":"#E5E5CB",
    "boxShadow":"0px 5px 12px 0px rgba(0, 0, 0, 0.6)"
  }

  const navbarContDark = {
    "backgroundColor":"#3C3C32",
    "boxShadow":"0px 8px 22px 0px rgba(0, 0, 0, 0.6)"
  }

  const buttonStyleLight = {
    "backgroundColor":"#1A120B",
    "color":"#E5E5CB",
    "boxShadow":"5px 4px 2px 0px rgba(0, 0, 0, 0.6)"
  }

  const buttonStyleDark = {
    "backgroundColor":"#E5E5CB",
    "color":"#1A120B",
    "boxShadow":"6px 6px 12px 0px rgba(0, 0, 0, 0.78)"
  }


  const [theme,setTheme] = useState("light")
  const [navbarContStyle, setnavbarContStyle] = useState(navbarContLight);
  const [buttonStyle, setbuttonStyle] = useState(buttonStyleLight);
  
  function changeTheme(){
    if(theme == "light"){
      setTheme("dark")
    }
    else{
      setTheme("light")
    }
    console.log(theme)
  }


  useEffect(() => {
    const bodyStyle = theme === "dark" ? bodyStyleDark : bodyStyleLight;
    document.body.style.backgroundColor = bodyStyle.backgroundColor;
    document.body.style.color = bodyStyle.color;
    setnavbarContStyle(theme == "dark" ?  navbarContDark : navbarContLight)
    setbuttonStyle(theme == "dark" ? buttonStyleDark : buttonStyleLight)
  },[theme])

  
  return (
    <div>
      <nav>
        <div className="navbar-cont" style={navbarContStyle}>
          <div className="logo-div">
            <img className="logo" src={logo} alt="logo" />
          </div>

          <div className="dark-mode-div">
            <button className="dark-mode-btn" onClick={changeTheme} style={buttonStyle}>{theme === "light" ? "Dark" : "Light"}</button>
          </div>
        </div>
      </nav>

      <QuestionBox theme = {theme}/>
    </div>
  );
}

export default App;
