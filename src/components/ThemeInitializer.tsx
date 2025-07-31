'use client';

import { useEffect } from 'react';

export default function ThemeInitializer() {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    const system = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    document.body.dataset.theme = (stored || system) as 'light' | 'dark';
  }, []);

  return null;
}
