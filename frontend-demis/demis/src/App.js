import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import style from "./style/style.module.css";

function App() {
  return (
    <>
    
      <Router>
        <div className={style.mainPage}>
          <div className={style.container}>
            <Header />
            
            <Main />
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
