
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and Apple Pay. For select regions, we also offer payment installments through Klarna and Afterpay."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping typically takes 3-5 business days within the continental US. Express shipping (1-2 business days) is available for most locations. International shipping times vary by region, usually taking 7-14 business days."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a hassle-free 30-day return policy for all unused items in their original packaging. Simply initiate a return through your account dashboard or contact our customer service team. Return shipping is free for domestic orders."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 100 countries worldwide. International shipping rates and delivery times vary by location. You can view specific shipping information for your country during checkout."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order ships, you'll receive a tracking number via email. You can also track your order in real-time through your account dashboard on our website or mobile app."
    },
    {
      question: "Are my payment details secure?",
      answer: "Absolutely! We use industry-standard SSL encryption to protect your payment information. Our payment processing system is PCI DSS compliant, ensuring your data is handled with the highest security standards."
    },
    {
      question: "Do you offer size exchanges?",
      answer: "Yes, we offer free size exchanges for all clothing items. Simply initiate an exchange through your account, and we'll send you a return label. Once we receive your item, we'll ship out the new size right away."
    },
    {
      question: "How do I contact customer service?",
      answer: "Our customer service team is available 24/7 through multiple channels: live chat on our website, email support@example.com, or call us at 1-800-EXAMPLE. We typically respond to all inquiries within 2 hours during business hours."
    }
  ];

  return (
    <div className="min-h-screen bg-secondary">
      {/* Header Section */}
      <div className="bg-primary py-20">
        <div className="container mx-auto px-6 text-center">
          <HelpCircle className="w-16 h-16 text-white/90 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Find answers to common questions about our services, shipping, returns, and more.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Search Bar */}
          <div className="mb-12">
            <div className="relative">
              <input
                type="text"
                placeholder="Search frequently asked questions..."
                className="w-full px-6 py-4 bg-white rounded-lg shadow-sm border border-light focus:outline-none focus:ring-2 focus:ring-primary/20 text-dark"
              />
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-light overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 flex items-center justify-between text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-semibold text-dark">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-primary" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-primary" />
                  )}
                </button>
                <div
                  className={`px-6 transition-all duration-200 ease-in-out ${
                    openIndex === index ? 'py-4' : 'py-0 h-0'
                  } overflow-hidden`}
                >
                  <p className="text-dark/70">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
         
        </div>
        
      </div>

      <div className="mt-16 text-center py-20 bg-light rounded-lg">
            <h2 className="text-2xl font-bold text-dark mb-4">
              Still have questions?
            </h2>
            <p className="text-dark/70 mb-6">
              Can't find the answer you're looking for? Please chat with our friendly team.
            </p>
           <Link to="/contactus"> <button className="px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-colors">
              Contact Support
            </button>
            </Link>
          </div>
    </div>
  );
};

export default FAQ;