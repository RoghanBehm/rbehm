import React from "react";
import { Link } from "react-router-dom";
import githubIcon from "../assets/GitHub+logo+inverted.png";
import styles from "./Header.module.css";
import folderIcon from "../assets/folder-icon.svg";

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <Link to="/rbehm" className={styles.navLink}>
        <h2 className={styles.logo}>My App</h2>
      </Link>
      
      <nav className={styles.nav}>
        <Link to="/github" className={styles.navLink}>
          <img src={folderIcon} className={styles.ficon} alt="GitHub repositories" />
        </Link>
        <a href="https://github.com/RoghanBehm" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} className={styles.gicon} alt="GitHub Profile" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
