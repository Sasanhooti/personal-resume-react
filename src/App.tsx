import { useState,useEffect } from "react";
import { ArrowUpRight, BrainCircuit, Code2, GraduationCap, Trophy, Send, Instagram, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SectionHeading from "./components/SectionHeading";
import { content, type Language } from "./data/portfolio";

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const t = content[language];
  const isFa = language === "fa";
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) =>
      current === "dark" ? "light" : "dark"
    );
  };


  return (
    <div className={`app-shell ${isFa ? "rtl" : "ltr"}`} dir={isFa ? "rtl" : "ltr"} lang={language}>
      <div className="page-wrap" >
        <Navbar language={language} onLanguageChange={() => setLanguage(isFa ? "en" : "fa")} nav={t.nav} theme={theme} onToggleTheme={toggleTheme} />
        <main>
          <Hero language={language} t={t} />
          <section className="section about-section" id="about">
            <SectionHeading eyebrow={t.aboutLabel} title={t.aboutTitle} />
            <div className="about-layout">
              <p className="about-copy">{t.about}</p>
              <div className="about-facts">
                <div className="fact"><Code2 size={19} /><span>{language === "en" ? "4 years" : "۴ سال"}</span><small>{language === "en" ? "Python experience" : "تجربه برنامه‌نویسی پایتون"}</small></div>
                <div className="fact"><BrainCircuit size={19} /><span>AI / ML</span><small>{language === "en" ? "Areas of interest" : "حوزه‌های علاقه‌مندی"}</small></div>
              </div>
            </div>
          </section>

          <section className="section skills-section" id="skills">
            <SectionHeading eyebrow={t.skillsLabel} title={t.skillsTitle} />
            <div className="skills-grid">
              {t.skills.map((skill, index) => (
                <motion.div className="skill-card" key={skill.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.04 }}>
                  <span className="skill-icon">{index % 2 === 0 ? <Code2 size={17} /> : <BrainCircuit size={17} />}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-level">{skill.level}</span>
                </motion.div>
              ))}
            </div>
          </section>

          <Projects language={language} t={t} />

          <section className="section journey-section" id="journey">
            <SectionHeading eyebrow={t.journeyLabel} title={t.journeyTitle} />
            <div className="journey-grid">
              <article className="journey-card"><span className="journey-icon"><GraduationCap size={20} /></span><p className="eyebrow">{t.educationTitle}</p><h3>{t.education}</h3><p>{t.educationDetail}</p></article>
              <article className="journey-card"><span className="journey-icon"><BrainCircuit size={20} /></span><p className="eyebrow">{t.certificateTitle}</p><h3>{t.certificate}</h3><p>{t.certificateDetail}</p></article>
              <article className="journey-card"><span className="journey-icon"><Trophy size={20} /></span><p className="eyebrow">{t.achievementsTitle}</p><h3>{t.achievements}</h3><p>{t.achievementsDetail}</p></article>
            </div>
          </section>

          <section className="contact-section" id="contact">
            <div className="contact-glow" />
            <div className="contact-content">
              <p className="eyebrow">{t.contactLabel}</p>
              <h2 className="contact-title">{t.contactTitle}</h2>
              <p>{t.contactText}</p>
              <a className="button button-primary" href="sasanhooti0@gmail.com">{t.email}<ArrowUpRight size={17} /></a>
              <small className="contact-note"></small>
              <a
    href="https://t.me/@Sasanhooti"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-icon telegram"
    aria-label="Telegram"
  >
    <Send size={21} />
  </a>

  <a
    href="https://instagram.com/sasan_hooti"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-icon instagram"
    aria-label="Instagram"
  >
    <Instagram size={21} />
  </a>

  <a
    href="https://wa.me/+989940891732"
    target="_blank"
    rel="noopener noreferrer"
    className="glass-icon whatsapp"
    aria-label="WhatsApp"
  >
    <MessageCircle size={21} />
  </a>
            </div>
          </section>
        </main>
        <footer className="site-footer"><a className="brand" href="#top"><span className="brand-mark">SH</span><span className="brand-name">sasan<span>.dev</span></span></a><p>{t.footer}</p><a className="back-top" href="#top">{language === "en" ? "Back to top" : "بازگشت به بالا"} ↑</a></footer>
      </div>
    </div>
  );
}
