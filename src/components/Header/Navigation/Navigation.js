import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

const links = ["How it works", "About", "Instructions", "Accounts", "Platforms", "Contact"];

const Navigation = () => {
  return (
    <nav className={styles.navigation}>
      <ul className={styles.navigation__list}>
      {links.map((link) => (
          <li className={styles.navigation__item} key={link}>
            <Link to="/" className={styles.navigation__link}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
