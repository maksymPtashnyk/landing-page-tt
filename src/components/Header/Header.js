import React, { useState } from 'react';
import Navigation from './Navigation/Navigation';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import classNames from 'classnames';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [language, setLanguage] = useState('EN')

  const toggleSelect = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setLanguage(value)
    setIsOpen(false);
  };
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__logo}>
          <Link to="/" className={styles.header__logoLink}>LOGO</Link>
        </div>
        <Navigation />
      </div>
      <div className={styles.header__right}>
      <div className={styles.languageSelect}>
          <div className={styles.languageSelect__customSelect} onClick={toggleSelect}>
            <div className={classNames(styles.languageSelect__selectedOption, isOpen ? styles.openSelect : '')}>
              <div className={styles.languageSelect__title}>{language}</div>
              <div className={styles.languageSelect__arrow}></div>
            </div>
              <div className={classNames(styles.languageSelect__options, isOpen ? styles.open : '')}>
                <div className={styles.languageSelect__option} onClick={() => handleOptionClick("EN")}>EN</div>
                <div className={styles.languageSelect__option} onClick={() => handleOptionClick("UA")}>UA</div>
                <div className={styles.languageSelect__option} onClick={() => handleOptionClick("HE")}>HE</div>
              </div>
          </div>
        </div>


        <div className={styles.signInButton}>
          <button className={styles.signInButton__button}>Sign in for free</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

