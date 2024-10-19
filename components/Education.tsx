import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const educations = [
  {
    degree: 'Master of Science in Computer Science',
    institution: 'Tech University',
    period: '2015 - 2017',
    details: 'Specialized in Artificial Intelligence and Machine Learning'
  },
  {
    degree: 'Bachelor of Science in Software Engineering',
    institution: 'Engineering College',
    period: '2011 - 2015',
    details: 'Graduated with honors, GPA: 3.8/4.0'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="space-y-6">
        {educations.map((edu, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{edu.degree}</CardTitle>
              <p className="text-sm text-muted-foreground">{edu.institution}, {edu.period}</p>
            </CardHeader>
            <CardContent>
              <p>{edu.details}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default Education;