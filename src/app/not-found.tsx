"use client";

import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t("404.header")}</h1>
      <Link href="/portfolio">{t("404.link")}</Link>
    </div>
  );
}
