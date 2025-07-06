
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleHireClick = () => {
    window.location.href = "mailto:rishikesh.gupta@example.com";
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
            Rishikesh Gupta
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8 font-light">
            Data Scientist & Analytics Professional
          </h2>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            I transform data into actionable insights and build intelligent solutions. 
            As a fresh graduate with hands-on project experience, I bring passion for 
            data science and analytical thinking to solve real-world problems.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              View My Work
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              onClick={handleHireClick}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
