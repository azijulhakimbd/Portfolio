import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "Email",
    value: "info@azijul.pro.bd",
    href: "mailto:info@azijul.pro.bd",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "github.com/azijulhakimbd",
    href: "https://github.com/azijulhakimbd",
    icon: FaGithub ,
  },
  {
    label: "LinkedIn",
    value: "https://linkedin.com/in/azijulhakimbd",
    href: "https://linkedin.com/in/azijulhakimbd",
    icon: FaLinkedin,
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <section className="max-w-3xl">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          Let&apos;s build something useful.
        </h1>

        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Whether you have an AI product idea, a frontend project, or simply
          want to connect, feel free to reach out.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              className="rounded-2xl border p-6 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="size-7 text-primary" />

              <p className="mt-6 text-sm text-muted-foreground">
                {link.label}
              </p>

              <p className="mt-1 font-medium">{link.value}</p>
            </a>
          );
        })}
      </section>

      <section className="mt-16 rounded-2xl border bg-muted/30 p-8">
        <h2 className="text-2xl font-semibold">Currently interested in</h2>

        <ul className="mt-5 space-y-3 text-muted-foreground">
          <li>• Frontend AI engineering opportunities</li>
          <li>• AI-powered product development</li>
          <li>• AI agents and tool-based workflows</li>
          <li>• Open-source collaboration</li>
        </ul>
      </section>
    </main>
  );
}