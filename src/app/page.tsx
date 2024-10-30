'use client'

import { useVisitorTracking } from "@/hooks/useVisitorTracking";
import Section from "@components/Section";

export default function MainPage() {
  useVisitorTracking();

  return (
    <div>
      <Section.Intro />
      <Section.About />
      <Section.Stacks />
      <Section.Projects />
      <Section.Contact />
    </div>
  );
}