"use client";

import styles from "../portfolio.module.css";
import AnimatedSection from "@/components/AnimatedSection";
import { useTranslation } from "react-i18next";
import Image from "next/image";

export default function ResumeClient({
  showJobs = true,
}: {
  showSkills?: boolean;
  showJobs?: boolean;
}) {
  const { t } = useTranslation();

  const job1Points = Array.from({ length: 6 }, (_, i) =>
    t(`resume.job1_point${i + 1}`, { defaultValue: "" })
  ).filter(Boolean);

  const job2Points = Array.from({ length: 8 }, (_, i) =>
    t(`resume.job2_point${i + 1}`, { defaultValue: "" })
  ).filter(Boolean);

  const jobs = [
    {
      title: t("resume.job1_title"),
      link: t("resume.job1_link", { defaultValue: "" }),
      experience: t("resume.job1_experience", { defaultValue: "" }),
      tech: t("resume.job1_tech", { defaultValue: "" }),
      about: t("resume.job1_about", { defaultValue: "" }),
      points: job1Points,
    },
    {
      title: t("resume.job2_title"),
      link: t("resume.job2_link", { defaultValue: "" }),
      experience: t("resume.job2_experience", { defaultValue: "" }),
      tech: t("resume.job2_tech", { defaultValue: "" }),
      about: t("resume.job2_about", { defaultValue: "" }),
      points: job2Points,
    },
  ];

  return (
    <AnimatedSection variant="slide">
      {showJobs && (
        <h2 className={`${styles.heading} ${styles.typing}`}>
          {t("resume.title")}
        </h2>
      )}

      {showJobs && (
        <>
          <h3 className={styles.heading}>{t("resume.previous_jobs")}</h3>
          <ul className={styles.jobList}>
            {jobs.map((job) => (
              <li key={job.title} className={styles.jobItem}>
                <h4 className={`${styles.company} ${styles.content}`}>
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    {job.title}
                  </a>
                  {job.experience && (
                    <span className={styles.experience}>
                      {" "}
                      ({job.experience})
                    </span>
                  )}
                </h4>
                {job.about && <p className={styles.jobAbout}>{job.about}</p>}
                <h4 className={styles.responsibilities}>
                  {t("resume.responsibilities")}
                </h4>
                <ul className={styles.projectList}>
                  {job.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
                <h4 className={styles.responsibilities}>{t("resume.tech")}</h4>
                {job.tech && <p className={styles.jobTech}>{job.tech}</p>}
              </li>
            ))}
          </ul>
        </>
      )}
    </AnimatedSection>
  );
}
