"use client";

import AboutClient from "./about/AboutClient";
import ResumeClient from "./resume/ResumeClient";

export default function HomeClient() {
  return (
    <>
      <AboutClient />
      <ResumeClient showJobs={false} />
    </>
  );
}
