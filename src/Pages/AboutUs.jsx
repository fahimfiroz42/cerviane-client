
import { Users, Target, Award, ArrowRight } from 'lucide-react';

const AboutUs = () => {
    return (
        <div className=" min-h-screen bg-secondary">
        {/* Hero Section */}
        <div className="relative h-[400px] bg-primary ">
          <div className=" absolute inset-0 bg-dark/20"></div>
          <div className="relative w-11/12  mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Our Story</h1>
              <p className="text-xl opacity-90">Crafting exceptional shopping experiences since 1995. We're more than just an ecommerce platform - we're your trusted partner in quality and style.</p>
            </div>
          </div>
        </div>
  
        {/* Mission Statement */}
        <div className="py-20 bg-light">
          <div className="w-11/12 mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8 text-dark">Our Mission</h2>
              <p className="text-xl text-dark/80 leading-relaxed">
                To revolutionize online shopping by providing unparalleled customer experiences, curated products, and innovative solutions that enhance people's lives.
              </p>
            </div>
          </div>
        </div>
  
        {/* Values Section */}
        <div className="py-20 bg-secondary">
          <div className="w-11/12 mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16 text-dark">Our Core Values</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  icon: <Target className="w-10 h-10 text-primary" />,
                  title: "Excellence",
                  description: "We strive for excellence in everything we do, from product curation to customer service."
                },
                {
                  icon: <Users className="w-10 h-10 text-primary" />,
                  title: "Customer First",
                  description: "Our customers are at the heart of every decision we make and every action we take."
                },
                {
                  icon: <Award className="w-10 h-10 text-primary" />,
                  title: "Innovation",
                  description: "We continuously innovate to improve and enhance the shopping experience."
                }
              ].map((value, index) => (
                <div key={index} className="text-center p-6 rounded-lg bg-white shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex justify-center mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-dark">{value.title}</h3>
                  <p className="text-dark/70">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Team Section */}
        <div className="py-20 bg-light">
          <div className="w-11/12 mx-auto ">
            <h2 className="text-3xl font-bold text-center mb-16 text-dark">Meet Our Leadership</h2>
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
                  name: "David Chen",
                  position: "CEO & Founder"
                },
                {
                  image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
                  name: "Sarah Johnson",
                  position: "Chief Operations Officer"
                },
                {
                  image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400&q=80",
                  name: "Michael Roberts",
                  position: "Head of Technology"
                }
              ].map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full mx-auto mb-6 object-cover ring-4 ring-primary/20"
                  />
                  <h3 className="text-xl font-semibold mb-2 text-dark">{member.name}</h3>
                  <p className="text-dark/70">{member.position}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* Company Stats */}
        <div className="py-20 bg-primary text-white">
          <div className="w-11/12 mx-auto px-6">
            <div className="grid md:grid-cols-4 gap-12 text-center">
              {[
                { number: "25+", label: "Years of Excellence" },
                { number: "1M+", label: "Happy Customers" },
                { number: "50k+", label: "Products" },
                { number: "100+", label: "Team Members" }
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-secondary/90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="py-20 bg-secondary">
          <div className="w-11/12 mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-8 text-dark">Join Our Journey</h2>
            <p className="text-xl text-dark/70 mb-8 max-w-2xl mx-auto">
              Be part of our story as we continue to revolutionize the future of online shopping.
            </p>
            <button className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    );
};

export default AboutUs;