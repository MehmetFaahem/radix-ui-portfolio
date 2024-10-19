import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const experiences = [
  {
    title: 'Senior Full Stack Developer',
    company: 'Tech Innovators Inc.',
    period: 'Jan 2020 - Present',
    responsibilities: [
      'Lead a team of 5 developers in building scalable web applications',
      'Implemented microservices architecture, improving system efficiency by 40%',
      'Mentored junior developers and conducted code reviews'
    ]
  },
  {
    title: 'Full Stack Developer',
    company: 'WebSolutions Co.',
    period: 'Mar 2017 - Dec 2019',
    responsibilities: [
      'Developed and maintained multiple client websites using React and Node.js',
      'Optimized database queries, reducing load times by 30%',
      'Integrated third-party APIs and payment gateways'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Work Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{exp.title} at {exp.company}</CardTitle>
              <p className="text-sm text-muted-foreground">{exp.period}</p>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                {exp.responsibilities.map((resp, idx) => (
                  <li key={idx}>{resp}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Experience;