import  { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare } from 'lucide-react';
import Swal from 'sweetalert2';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if(formData){
          Swal.fire({
            title: 'Message Sent Successfully',
            text: 'Your message has been sent. We will get back to you soon.',
            icon: 'success',
            confirmButtonText: 'OK'
          })
         
        }
       
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
    
      return (
        <div className="min-h-screen bg-secondary">
          {/* Header Section */}
          <div className="bg-primary py-20">
            <div className="w-11/12 mx-auto px-6 text-center">
              <MessageSquare className="w-16 h-16 text-white/90 mx-auto mb-6" />
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Get in Touch
              </h1>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Have a question or need assistance? We're here to help. Contact our team for support.
              </p>
            </div>
          </div>
    
          <div className="w-11/12 mx-auto  py-16">
            <div className="grid md:grid-cols-3 gap-12">
              {/* Contact Information */}
              <div className="md:col-span-1 space-y-8">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-dark mb-6">Contact Info</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-dark">Email</h3>
                        <p className="text-dark/70">support@example.com</p>
                        <p className="text-dark/70">sales@example.com</p>
                      </div>
                    </div>
    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-dark">Phone</h3>
                        <p className="text-dark/70">+1 (555) 123-4567</p>
                        <p className="text-dark/70">+1 (555) 765-4321</p>
                      </div>
                    </div>
    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-dark">Address</h3>
                        <p className="text-dark/70">
                          123 Commerce Street<br />
                          Suite 100<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-dark">Business Hours</h3>
                        <p className="text-dark/70">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 5:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
    
              {/* Contact Form */}
              <div className="md:col-span-2">
                <div className="bg-white p-8 rounded-lg shadow-sm">
                  <h2 className="text-2xl font-bold text-dark mb-6">Send us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-dark/70 mb-2">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-dark/70 mb-2">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                          required
                        />
                      </div>
                    </div>
    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-dark/70 mb-2">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-primary/20"
                        required
                      />
                    </div>
    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-dark/70 mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-light focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none"
                        required
                      ></textarea>
                    </div>
    
                    <button
                      type="submit"
                      className="w-full md:w-auto px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                    >
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
};

export default ContactUs;