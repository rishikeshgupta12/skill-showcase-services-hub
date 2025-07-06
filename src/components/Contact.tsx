
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Linkedin, Github } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "john@example.com",
      href: "mailto:john@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/johndoe",
      href: "https://linkedin.com/in/johndoe"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/johndoe",
      href: "https://github.com/johndoe"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-purple-700 text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <p className="text-lg opacity-90 mb-8">
                I'm always excited to take on new challenges and collaborate with innovative teams. 
                Whether you have a project in mind or just want to chat about possibilities, I'd love to hear from you.
              </p>
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold"
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
