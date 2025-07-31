"use client";

import Image from "next/image";
import { ReactNode } from "react";
import styles from "./FlipCard.module.css";

interface FlipCardProps {
  frontImage: string;
  alt: string;
  children: ReactNode;
}

export default function FlipCard({ frontImage, alt, children }: FlipCardProps) {
  return (
    <div className={styles.card} tabIndex={0}>
      <div className={styles.inner}>
        <div className={styles.front}>
          <Image
            src={frontImage}
            alt={alt}
            fill
            sizes="100%"
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className={styles.back}>{children}</div>
      </div>
    </div>
  );
}
