"use client";

import styles from "../portfolio.module.css";
import { useTranslation } from "react-i18next";
import AnimatedSection from "@/components/AnimatedSection";

export default function ContactClient() {
  const { t } = useTranslation();
  return (
    <AnimatedSection variant="slide">
      <h2 className={styles.heading}>{t("portfolio.contact")}</h2>
      <div className={styles.info}>
        <a href={t("about.tg_link")} target="_blank">
          {t("about.tg")}
        </a>{" "}
        <br />
        <a href={t("about.github_link")} target="_blank">
          {t("about.github")}
        </a>
        <p>
          <b>{t("about.header_mail")} </b>
          {t("about.mail")}
        </p>
      </div>
    </AnimatedSection>
  );
}
