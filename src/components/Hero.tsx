import { ArrowDownRight, ArrowUpRight, Download, Github, MapPin } from "lucide-react";
import { motion } from "motion/react";
import type { Language } from "../data/portfolio";

type Props = {
  language: Language;
  t: {
    availability: string; greeting: string; name: string; role: string; intro: string;
    viewProjects: string; downloadCV: string; location: string;
  };
};

export default function Hero({ language, t }: Props) {
  return (
    <section className={`hero ${language === "fa" ? "hero-fa" : ""}`} id="top">
      <div className="hero-grid" aria-hidden="true" />
      <motion.div className="hero-copy" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
        <div className="availability"><span className="status-dot" />{t.availability}</div>
        <p className="hero-greeting">{t.greeting}</p>
        <h1 className="persian-name">{t.name}</h1>
        <h2>{t.role}<span className="role-line" /></h2>
        <p className="hero-intro">{t.intro}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#projects">{t.viewProjects}<ArrowUpRight size={17} /></a>
          <button className="button button-secondary" onClick={() => window.print()} type="button"><Download size={17} />{t.downloadCV}</button>
        </div>
        <div className="hero-meta">
          <span><MapPin size={15} />{t.location}</span>
          <span className="meta-divider" />
          <a href="https://github.com/Sasanhooti" target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={12} /></a>
        </div>
      </motion.div>
      <motion.div className="hero-art" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.15 }}>
        <div className="orbit orbit-one" />
        <div className="orbit orbit-two" />
        <div className="hero-monogram">S<span>H</span></div>
        <div className="floating-card code-card">
          <span className="code-dot red" /><span className="code-dot yellow" /><span className="code-dot green" />
          <code><span>const</span> Humen = {"{"}<br />&nbsp; curious: <b>true</b>,<br />&nbsp; building: <b>"Beautiful World"</b><br />{"}"}</code>
        </div>
        <div className="floating-card status-card"><span className="status-dot" /><div ><strong className="mini-box">{language === "en" ? "With the exception of the specialist in that field," : "،به‌جز متخصص آن حوزه"}</strong><small className="font-persian">{language === "en" ? "Artificial intelligence will replace everyone else." : ".هوش مصنوعی جایگزین افراد دیگر خواهد شد"}</small></div></div>
        <div className="art-index">SASANHOOTI / 2026</div>
      </motion.div>
      <a className="scroll-cue" href="#about"><ArrowDownRight size={16} />{language === "en" ? "SCROLL TO EXPLORE" : "برای مشاهده اسکرول کن"}</a>
    </section>
  );
}
