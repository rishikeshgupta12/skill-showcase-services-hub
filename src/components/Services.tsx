
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies",
      price: "Starting at $2,500",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Mobile-First"],
      popular: false
    },
    {
      title: "Full Stack Development",
      description: "Complete end-to-end solutions with frontend, backend, and database",
      price: "Starting at $5,000",
      features: ["Custom Backend", "Database Design", "API Development", "Authentication"],
      popular: true
    },
    {
      title: "Digital Consultation",
      description: "Strategic guidance for your digital transformation journey",
      price: "$150/hour",
      features: ["Technical Audit", "Strategy Planning", "Architecture Review", "Team Guidance"],
      popular: false
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing maintenance and support for your digital products",
      price: "Starting at $500/month",
      features: ["24/7 Monitoring", "Regular Updates", "Bug Fixes", "Performance Optimization"],
      popular: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50" id="services">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Services I Offer</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional services tailored to help your business succeed in the digital world
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in ${
                service.popular ? 'ring-2 ring-blue-500 scale-105' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white">
                  Most Popular
                </Badge>
              )}
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900">{service.title}</CardTitle>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
                <div className="text-2xl font-bold text-blue-600 mt-2">{service.price}</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
