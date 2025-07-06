
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Science & ML",
      skills: ["Python", "Machine Learning", "Statistical Analysis", "Data Visualization", "Pandas"],
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "Analytics & Tools",
      skills: ["SQL", "Excel", "Tableau", "Power BI", "R"],
      color: "bg-green-100 text-green-800"
    },
    {
      title: "Business & Management",
      skills: ["Business Analysis", "Project Management", "Strategic Planning", "Market Research"],
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "Technical Skills",
      skills: ["Data Mining", "Predictive Modeling", "Data Cleaning", "Statistical Testing"],
      color: "bg-orange-100 text-orange-800"
    }
  ];

  return (
    <section className="py-20 bg-white" id="skills">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive skill set combining data science, business knowledge, and analytical thinking
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} className={`${category.color} hover:scale-105 transition-transform`}>
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
