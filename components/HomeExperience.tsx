"use client";

import dynamic from "next/dynamic";
import CursorField from "@/components/CursorField";
import ScrollProgress from "@/components/ScrollProgress";
import SectionLoader from "@/components/SectionLoader";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ContactSection from "@/components/sections/ContactSection";
import HeroTerminal from "@/components/sections/HeroTerminal";
import ThinkingSection from "@/components/sections/ThinkingSection";

const SystemsSection = dynamic(
  () => import("@/components/sections/SystemsSection"),
  { loading: () => <SectionLoader label="Mapping systems" /> }
);

const InteractiveProjects = dynamic(
  () => import("@/components/sections/InteractiveProjects"),
  { loading: () => <SectionLoader label="Loading project stories" /> }
);

const ResearchSection = dynamic(
  () => import("@/components/sections/ResearchSection"),
  { loading: () => <SectionLoader label="Preparing research pipeline" /> }
);

const LeadershipSection = dynamic(
  () => import("@/components/sections/LeadershipSection"),
  { loading: () => <SectionLoader label="Scaling network" /> }
);

const CurrentlyBuildingSection = dynamic(
  () => import("@/components/sections/CurrentlyBuildingSection"),
  { loading: () => <SectionLoader label="Syncing current work" /> }
);

export default function HomeExperience() {
  return (
    <>
      <SmoothScrollProvider />
      <ScrollProgress />
      <CursorField />
      <div className="noise-overlay" aria-hidden="true" />
      <main>
        <HeroTerminal />
        <SystemsSection />
        <InteractiveProjects />
        <ResearchSection />
        <LeadershipSection />
        <ThinkingSection />
        <CurrentlyBuildingSection />
        <ContactSection />
      </main>
    </>
  );
}
