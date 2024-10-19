import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2023 MD. Fahim. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://github.com/mdfahim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com/in/mdfahim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://twitter.com/mdfahim" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;