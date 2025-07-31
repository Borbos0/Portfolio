"use client";

import styles from "../portfolio.module.css";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";
import Image from "next/image";

export default function AboutClient() {
  const { t } = useTranslation();
  const skills = [
    { label: t("about.skill1"), icon: "/images/javascript_logo.svg" },
    { label: t("about.skill2"), icon: "/images/react_logo.svg" },
    { label: t("about.skill3"), icon: "/images/typescript_logo.svg" },
    { label: t("about.skill4"), icon: "/images/redux_logo.svg" },
    { label: t("about.skill5"), icon: "/images/docker_logo.svg" },
    { label: t("about.skill6"), icon: "/images/nextjs_logo.svg" },
    { label: t("about.skill7"), icon: "/images/html_5_logo.svg" },
    { label: t("about.skill8"), icon: "/images/css_3_logo.svg" },
    { label: t("about.skill9"), icon: "/images/postgresql_logo.svg" },
    { label: t("about.skill10"), icon: "/images/vue_logo.svg" },
    { label: t("about.skill11"), icon: "/images/angular_logo.svg" },
    { label: t("about.skill12"), icon: "/images/tailwind_css_logo.svg" },
    { label: t("about.skill13"), icon: "/images/git_logo.svg" },
    { label: t("about.skill14"), icon: "/images/node_logo.svg" },
    { label: t("about.skill15"), icon: "/images/jquery_logo.svg" },
    { label: t("about.skill16"), icon: "/images/oracle_logo.svg" },
    { label: t("about.skill17"), icon: "/images/php_logo.svg" },
  ];
  return (
    <AnimatedSection variant="slide">
      <h2 className={styles.heading}>{t("portfolio.about")}</h2>
      <div className={styles.header}>
        <Image
          src="/images/myPhoto.jpg"
          alt={t("about.avatar_alt")}
          width={200}
          height={200}
          className={styles.avatar}
        />
        <div className={styles.info}>
          <p>
            <b>{t("about.header_fio")} </b>
            {t("about.fio")}
          </p>
          <p>
            <b>{t("about.header_city")} </b>
            {t("about.city")}
          </p>
          <p>
            <b>{t("about.header_age")} </b>
            {t("about.age")}
          </p>
          <p>
            <b>{t("about.header_mail")} </b>
            {t("about.mail")}
          </p>
          <p>
            <b>{t("about.header_phone")} </b>
            {t("about.phone")}
          </p>
          <a href={t("about.tg_link")} target="_blank">
            {t("about.tg")}
          </a>{" "}
          <br />
          <a href={t("about.github_link")} target="_blank">
            {t("about.github")}
          </a>
        </div>
      </div>
      {t("about.about", { defaultValue: "" }) && (
        <p className={styles.content}>{t("about.about")}</p>
      )}
      {t("about.specialization_text", { defaultValue: "" }) && (
        <>
          <h3 className={styles.heading}>{t("about.specialization")}</h3>
          <p className={styles.content}>{t("about.specialization_text")}</p>
        </>
      )}
      <h3 className={styles.heading}>{t("about.skills")}</h3>
      <ul className={styles.skillsGrid}>
        {skills.map((skill) => (
          <li key={skill.label} className={styles.skillItem}>
            <Image src={skill.icon} alt={skill.label} width={40} height={40} />
            <span>{skill.label}</span>
          </li>
        ))}
      </ul>
    </AnimatedSection>
  );
}
