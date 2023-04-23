import React from "react";
import { Link } from "react-router-dom";
import style from "../../style/style.module.css";


function Header() {
  return (
    <header className={style.header}>
    <h1>Demis Test</h1>
      <ul className={style.nav}>
      <li>
          <Link to="/">На главную</Link>
        </li>
        <li>
          <Link to="/feedback">Обратная связь</Link>
        </li>
        <li>
          <Link to="/news">Новости</Link>
        </li>
        
      </ul>
    </header>
  );
}

export default Header;
