import { portfolio } from "@/data/portfolio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Github, Linkedin, Mail, Terminal, Cloud, Server } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 md:py-32 flex flex-col items-center text-center space-y-8">
        <div className="p-3 bg-muted rounded-full">
          <Terminal className="w-12 h-12 text-primary" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          {portfolio.personal.name}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl">
          {portfolio.personal.role}
        </p>
        <p className="max-w-xl text-muted-foreground">
          {portfolio.personal.bio}
        </p>
        <div className="flex gap-4">
          <Button asChild>
            <Link href={portfolio.personal.github} target="_blank">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={portfolio.personal.linkedin} target="_blank">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link href={`mailto:${portfolio.personal.email}`}>
              <Mail className="mr-2 h-4 w-4" /> Contact
            </Link>
          </Button>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Technical Skills</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {portfolio.skills.map((skill) => (
            <Badge key={skill.name} variant="secondary" className="text-lg px-4 py-1">
              {skill.name}
            </Badge>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Experience</h2>
          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {portfolio.experience.map((job) => (
              <Card key={job.company}>
                <CardHeader>
                  <CardTitle>{job.role}</CardTitle>
                  <CardDescription>{job.company} | {job.period}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    {job.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {portfolio.projects.map((project) => (
            <Card key={project.name} className="flex flex-col">
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Cloud className="w-5 h-5 text-primary" />
                  <CardTitle className="text-xl">{project.name}</CardTitle>
                </div>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline">{tag}</Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild size="sm" className="w-full">
                  <Link href={project.link} target="_blank">View Project</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Certifications</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {portfolio.certifications.map((cert) => (
              <Card key={cert.name} className="flex flex-col h-full bg-card hover:bg-accent/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Server className="w-5 h-5 text-primary" />
                    <CardTitle className="text-lg">
                      {/* @ts-ignore - Validating link existence dynamically */}
                      {cert.link ? (
                        <Link href={cert.link} target="_blank" className="hover:underline">
                          {cert.name}
                        </Link>
                      ) : (
                        cert.name
                      )}
                    </CardTitle>
                  </div>
                  <CardDescription>{cert.issuer} - {cert.date}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center text-muted-foreground">
        <p>© {new Date().getFullYear()} {portfolio.personal.name}. Built with Next.js & Tailwind CSS.</p>
      </footer>
    </main>
  );
}
