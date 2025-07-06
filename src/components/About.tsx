
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const achievements = [
    { number: "10+", label: "Projects Completed" },
    { number: "0-1", label: "Years Experience" },
    { number: "2", label: "Degrees Pursuing" },
    { number: "100%", label: "Dedication Level" }
  ];

  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              I'm a passionate data scientist pursuing dual degrees - BBA-MBA Integrated 
              at National Forensics Sciences University, Gandhinagar, and BS in Data Science 
              at IIT Madras. My journey combines business acumen with technical expertise 
              in data science and analytics.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Though I'm a fresher with 0-1 years of experience, I've worked on various 
              projects that showcase my ability to extract meaningful insights from data, 
              build predictive models, and create data-driven solutions for real-world problems.
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <Badge className="bg-blue-100 text-blue-800">Data Science</Badge>
              <Badge className="bg-green-100 text-green-800">Machine Learning</Badge>
              <Badge className="bg-purple-100 text-purple-800">Analytics</Badge>
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
