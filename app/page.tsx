

import SkillsSection from "@/components/home/SkillsSection";
import AboutPage from "../components/home/AboutSection";
import CertificationsSection from "../components/home/CertificationsSection";
import ExperienceSection from "@/components/home/ExperienceSection";
import ProjectsSection from "@/components/home/ProjectSection";
import ContactSection from "@/components/home/ContactSection";
import ShaderHero from "@/components/home/ShaderHero";


export default function Home() {
  return (
    <main>
     <ShaderHero />
     <AboutPage />
     <SkillsSection />
     <ExperienceSection />
     <ProjectsSection />
     <CertificationsSection />
     <ContactSection />
    </main>
  );
}