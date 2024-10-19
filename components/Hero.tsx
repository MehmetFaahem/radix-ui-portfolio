import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-bold mb-4">MD. Fahim</h1>
      <h2 className="text-2xl text-muted-foreground mb-6">Full Stack Developer</h2>
      <p className="max-w-2xl mx-auto mb-8 text-lg">
        Passionate about creating efficient, scalable, and user-friendly web applications. 
        Experienced in both front-end and back-end technologies.
      </p>
      <Button size="lg" className="group">
        View My Work
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </Button>
    </section>
  );
};

export default Hero;