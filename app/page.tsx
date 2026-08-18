

import Hero from "../components/home/hero";
import AboutPage from "./about/page";
import CertificationsPage from "./certifications/page";
import ContactPage from "./contact/page";
import ExperiencePage from "./experience/page";
import ProjectsPage from "./projects/page";
import SkillsPage from "./skills/page";

export default function Home() {
  return (
    <main>
     <Hero />
     <AboutPage />
     <SkillsPage />
     <ExperiencePage />
     <ProjectsPage/>
     <CertificationsPage />
     <ContactPage />
    </main>
  );
}