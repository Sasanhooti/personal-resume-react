import { ArrowUpRight, Languages } from "lucide-react";
import type { Language } from "../data/portfolio";
import { Sun, Moon } from "lucide-react";

type Props = {
  language: Language;
  onLanguageChange: () => void;
  nav: readonly string[];
};

const ids = ["about", "skills", "projects", "journey", "contact"];

export default function Navbar({ language, onLanguageChange, nav, onToggleTheme, theme}: Props) {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Sasan Hooti home">
        <span className="brand-mark">SH</span>
        <span className="brand-name">sasan<span>.dev</span></span>
      </a>
      <nav className="desktop-nav" aria-label="Main navigation">
        {nav.map((item, index) => (
          <a href={`#${ids[index]}`} key={ids[index]}>{item}</a>
        ))}
      </nav>
      <div className="header-actions">
        <button className="theme-toggle" onClick={onToggleTheme} aria-label={theme === "dark"? "Switch to light mode": "Switch to dark mode"}title={theme === "dark" ? "Light mode" : "Dark mode"}>
        {theme === "dark" ? (
          <Sun size={19} />
        ) : (
          <Moon size={19} />
        )}
        </button>
        <button className="language-button" onClick={onLanguageChange} type="button" aria-label="Change language">
          <Languages size={16} />
          {language === "en" ? "FA" : "EN"}
        </button>
        <a className="header-contact" href="#contact">
          <span className="font-persian">{language === "en" ? "Let's talk" : "ارتباط"}</span>
          <ArrowUpRight size={15} />
        </a>
      </div>
    </header>
  );
}
