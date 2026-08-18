import { Award, ExternalLink } from "lucide-react";

const certifications = [
  {
    title: "Claude with Amazon Bedrock",
    issuer: "Anthropic Academy",
    year: "2026",
  },
  {
    title: "AI Fluency",
    issuer: "Anthropic",
    year: "2026",
  },
  {
    title: "Frontend Development",
    issuer: "Programming Hero",
    year: "2025",
  },
];

export default function CertificationsPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
      <header>
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Credentials
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
          Certifications
        </h1>
      </header>

      <section className="mt-16 space-y-5">
        {certifications.map((certificate) => (
          <article
            key={certificate.title}
            className="flex flex-col gap-5 rounded-2xl border p-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="flex gap-4">
              <div className="rounded-xl bg-muted p-3">
                <Award className="size-6 text-primary" />
              </div>

              <div>
                <h2 className="text-xl font-semibold">
                  {certificate.title}
                </h2>

                <p className="mt-1 text-muted-foreground">
                  {certificate.issuer} · {certificate.year}
                </p>
              </div>
            </div>

            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary"
            >
              Verify
              <ExternalLink className="size-4" />
            </a>
          </article>
        ))}
      </section>
    </main>
  );
}