
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "rishikesh.gupta@example.com",
      href: "mailto:rishikesh.gupta@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 98765 43210",
      href: "tel:+919876543210"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/rishikeshgupta",
      href: "https://linkedin.com/in/rishikeshgupta"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/rishikeshgupta",
      href: "https://github.com/rishikeshgupta"
    }
  ];

  const handleScheduleCall = () => {
    window.location.href = "mailto:rishikesh.gupta@example.com?subject=Schedule a Call - Data Science Services";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to turn your data into actionable insights? Let's discuss how I can help you solve your data challenges.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg opacity-90 mb-8">
                I'm excited to take on new data science projects and collaborate with innovative teams. 
                Whether you need data analysis, machine learning solutions, or business insights, I'd love to help.
              </p>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
                onClick={handleScheduleCall}
              >
                Schedule a Call
              </Button>
            </div>
            
            <div className="space-y-4 animate-fade-in">
              {contactMethods.map((method, index) => (
                <Card key={method.label} className="bg-white/10 border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                  <CardContent className="p-4">
                    <a href={method.href} className="flex items-center space-x-4 hover:text-blue-200 transition-colors">
                      <method.icon className="h-6 w-6" />
                      <div>
                        <div className="font-semibold">{method.label}</div>
                        <div className="opacity-90">{method.value}</div>
                      </div>
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
