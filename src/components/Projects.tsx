import { ArrowUpRight, Github } from "lucide-react";
import { motion } from "motion/react";
import type { Language } from "../data/portfolio";
import SectionHeading from "./SectionHeading";

type Project = { number: string; title: string; category: string; description: string; tags: readonly string[]; link: string };
type Props = { language: Language; t: { projectsLabel: string; projectsTitle: string; projectsIntro: string; projects: readonly Project[] } };

export default function Projects({ language, t }: Props) {
  return (
    <section className="section" id="projects">
      <SectionHeading eyebrow={t.projectsLabel} title={t.projectsTitle} intro={t.projectsIntro} />
      <div className="projects-grid">
        {t.projects.map((project, index) => (
          <motion.article className="project-card" key={project.number} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.4, delay: index * 0.08 }}>
            <div className="project-top"><span className="project-number">{project.number}</span><span className="project-category">{project.category}</span></div>
            <div className={`project-visual visual-${index + 1}`} aria-hidden="true">
              {index === 0 ? <div className="visual-window"><span /><span /><span /><div className="visual-lines"><i /><i /><i /></div></div> :
               index === 1 ? <div className="visual-neural"><div className="neural-core">AI</div><i /><i /><i /><i /><i /><i /></div> :
               <div className="visual-document"><div className="doc-line wide" /><div className="doc-line" /><div className="doc-line short" /><div className="doc-highlight" /><div className="doc-line wide" /><div className="doc-line" /></div>}
            </div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="tag-list">{project.tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
            <a className="project-link" href={project.link} target="_blank" rel="noreferrer"><Github size={16} />{language === "en" ? "View repository" : "مشاهده مخزن"}<ArrowUpRight size={15} /></a>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
