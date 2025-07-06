
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const achievements = [
    { number: "50+", label: "Projects Completed" },
    { number: "5+", label: "Years Experience" },
    { number: "30+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate full-stack developer with over 5 years of experience creating 
              digital solutions that drive business growth. My journey started with a curiosity 
              about how things work, and it evolved into a career dedicated to solving complex 
              problems through elegant code.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              I specialize in modern web technologies and have helped dozens of businesses 
              transform their ideas into successful digital products. From startups to 
              established companies, I bring the same level of dedication and expertise to every project.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge className="bg-blue-100 text-blue-800">React Expert</Badge>
              <Badge className="bg-green-100 text-green-800">Node.js Specialist</Badge>
              <Badge className="bg-purple-100 text-purple-800">UI/UX Focused</Badge>
              <Badge className="bg-orange-100 text-orange-800">Problem Solver</Badge>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <Card key={achievement.label} className="text-center border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {achievement.number}
                      </div>
                      <div className="text-sm text-gray-600">
                        {achievement.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
