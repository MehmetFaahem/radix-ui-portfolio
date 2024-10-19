import { Badge } from '@/components/ui/badge';

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express',
  'MongoDB', 'PostgreSQL', 'GraphQL', 'REST APIs', 'Docker', 'AWS',
  'Git', 'CI/CD', 'Agile Methodologies', 'Test-Driven Development'
];

const Skills = () => {
  return (
    <section id="skills" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Technologies</h2>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;