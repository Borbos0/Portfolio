"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t } = useTranslation();
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/portfolio") {
      return pathname === "/portfolio";
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  const toggleMenu = () => setOpen((prev) => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.menuButton}
        aria-label="Toggle navigation menu"
        aria-expanded={open}
        onClick={toggleMenu}
      >
        &#9776;
      </button>
      <nav
        className={`${styles.nav} ${open ? styles.open : ""}`}
        aria-label="Main navigation"
      >
        <Link
          href="/portfolio"
          onClick={closeMenu}
          className={isActive("/portfolio") ? styles.active : ""}
        >
          {t("header.home")}
        </Link>
        <Link
          href="/portfolio/about"
          onClick={closeMenu}
          className={isActive("/portfolio/about") ? styles.active : ""}
        >
          {t("header.about")}
        </Link>
        <Link
          href="/portfolio/projects"
          onClick={closeMenu}
          className={isActive("/portfolio/projects") ? styles.active : ""}
        >
          {t("header.projects")}
        </Link>
        <Link
          href="/portfolio/contact"
          onClick={closeMenu}
          className={isActive("/portfolio/contact") ? styles.active : ""}
        >
          {t("header.contact")}
        </Link>
      </nav>
      <div className={styles.actions}>
        <LanguageSwitcher />
        <ThemeSwitcher />
      </div>
    </header>
  );
}
