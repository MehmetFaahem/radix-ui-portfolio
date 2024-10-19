import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    liveLink: 'https://ecommerce-example.com',
    githubLink: 'https://github.com/mdfahim/ecommerce-platform'
  },
  {
    title: 'Task Management App',
    description: 'A Trello-like application for managing tasks and projects.',
    technologies: ['Vue.js', 'Express', 'PostgreSQL', 'Docker'],
    liveLink: 'https://taskmanager-example.com',
    githubLink: 'https://github.com/mdfahim/task-manager'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="outline" className="mr-2 mb-2">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Projects;