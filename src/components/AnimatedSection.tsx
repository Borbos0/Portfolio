'use client';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'slide';
}

export default function AnimatedSection({ children, className = '', variant = 'fade' }: Props) {
  const motionClass = variant === 'slide' ? 'slideUp' : 'fadeIn';
  const classes = `${className} ${motionClass}`.trim();
  return <div className={classes}>{children}</div>;
}
