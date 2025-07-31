"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Loader from "./Loader";
import styles from "./LanguageSwitcher.module.css";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [loading, setLoading] = useState(false);

  const handleChange = async (lng: string) => {
    setLoading(true);
    await i18n.changeLanguage(lng);
    setLoading(false);
  };

  return (
    <>
      {loading && <Loader />}
      <div className={styles.switcher}>
        <button
          onClick={() => handleChange("ru")}
          disabled={loading}
          aria-label="Русский"
          className={i18n.language === "ru" ? styles.active : ""}
        >
          <img src="/images/ru.svg" alt="" width={24} height={16} />
        </button>
        <button
          onClick={() => handleChange("en")}
          disabled={loading}
          aria-label="English"
          className={i18n.language === "en" ? styles.active : ""}
        >
          <img src="/images/en.svg" alt="" width={24} height={16} />
        </button>
      </div>
    </>
  );
}
