"use client";

import styles from "../portfolio.module.css";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";
import FlipCard from "@/components/FlipCard";

export default function ProjectsClient() {
  const { t } = useTranslation();
  const projects = [
    {
      image: "/images/project1.jpg",
      name: t("project.project1"),
      desc: t("project.project1_desc"),
      tech: t("project.project1_tech"),
      link: t("project.project1_link"),
    },
    {
      image: "/images/project2.png",
      name: t("project.project2"),
      desc: t("project.project2_desc"),
      tech: t("project.project2_tech"),
      link: t("project.project2_link"),
    },
    {
      image: "/images/project3.png",
      name: t("project.project3"),
      desc: t("project.project3_desc"),
      tech: t("project.project3_tech"),
      link: t("project.project3_link"),
    },
    {
      image: "/images/project4.png",
      name: t("project.project4"),
      desc: t("project.project4_desc"),
      tech: t("project.project4_tech"),
      link: t("project.project4_link"),
    },
    {
      image: "/images/project5.png",
      name: t("project.project5"),
      desc: t("project.project5_desc"),
      tech: t("project.project5_tech"),
      link: t("project.project5_link"),
    },
    {
      image: "/images/project6.png",
      name: t("project.project6"),
      desc: t("project.project6_desc"),
      tech: t("project.project6_tech"),
      link: t("project.project6_link"),
    },
    {
      image: "/images/project7.png",
      name: t("project.project7"),
      desc: t("project.project7_desc"),
      tech: t("project.project7_tech"),
      link: t("project.project7_link"),
    },
  ];

  return (
    <AnimatedSection variant="slide">
      <h2 className={styles.heading}>{t("portfolio.projects")}</h2>
      <ul className={styles.projectGrid}>
        {projects.map((p) => (
          <li key={p.image} className={styles.projectItem}>
            <h3 className={styles.projectName}>{p.name}</h3>
            <FlipCard frontImage={p.image} alt={p.name}>
              <p>{p.tech}</p>
            </FlipCard>
            <p>{p.desc}</p>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.projectLink}
              >
                {t("project.link")}
              </a>
            )}
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
