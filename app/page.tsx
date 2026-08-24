

import SkillsSection from "@/components/home/SkillsSection";
import AboutPage from "../components/home/AboutSection";
import CertificationsSection from "../components/home/CertificationsSection";
import Hero from "../components/home/hero";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectSection";
import ContactSection from "@/components/home/ContactSection";


export default function Home() {
  return (
    <main>
     <Hero />
      <AboutPage />
     <SkillsSection />
     <ExperienceSection />
     <ProjectsSection />
     <CertificationsSection />
     <ContactSection />
    </main>
  );
}