import type { Metadata } from "next";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Personal portfolio",
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.container}>{children}</section>;
}
