import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="portfolio10-header">
      <div className="container portfolio10-header__inner">
        <div className="portfolio10-header__top">
          <div className="portfolio10-header__brand">
            <img src="/assets/logo.png" alt="logo" className="portfolio10-header__logo" />
          </div>
          <nav className="portfolio10-header__nav">
            <a className="portfolio10-header__navlink" href="#about">About</a>
            <a className="portfolio10-header__navlink" href="#projects">Projects</a>
            <a className="portfolio10-header__navlink" href="#contact">Contact</a>
          </nav>
        </div>

        <div className="portfolio10-header__hero">
          <h1 className="portfolio10-header__title">Hi, I'm Kanupriya — Frontend Developer</h1>
          <div className="portfolio10-header__subtitle">
            I design and build responsive, accessible web apps using React.
          </div>
          <div className="portfolio10-header__actions">
            <a className="portfolio10-header__cta" href="#projects">See My Work</a>
            <a className="portfolio10-header__secondary" href="#contact">Let's Talk</a>
          </div>
        </div>
      </div>
    </header>
  );
}
