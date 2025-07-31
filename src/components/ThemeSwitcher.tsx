'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './ThemeSwitcher.module.css';

export default function ThemeSwitcher() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const { t } = useTranslation();

  useEffect(() => {
    const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const initial = stored || system;
    setTheme(initial);
  }, []);

  useEffect(() => {
    document.body.dataset.theme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={t('theme.toggle')}
      className={styles.button}
    >
      {theme === 'dark' ? t('theme.light') : t('theme.dark')}
    </button>
  );
}
