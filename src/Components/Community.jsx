
import { FaPenAlt, FaStar, FaGift } from "react-icons/fa"; // Import React Icons

const CommunitySection = () => {
  // JSON array for cards
  const cards = [
    {
      title: "Contribute With Your Opinion About A Product",
      description: "Share your valuable insights with the community.",
      icon: <FaPenAlt className="text-4xl text-primary mb-4" />,
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Rate A Product You Have Already Used",
      description: "Help others make informed decisions with your review.",
      icon: <FaStar className="text-4xl text-primary mb-4" />,
      image: "https://via.placeholder.com/150",
      link: "#",
    },
    {
      title: "Collect Opinions & Get Your Choice Right",
      description: "Gather community feedback before buying a product.",
      icon: <FaGift className="text-4xl text-primary mb-4" />,
      image: "https://via.placeholder.com/150",
      link: "#",
    },
  ];

  return (
   <div className="bg-secondary ">
     <div className="bg-secondary py-12 w-11/12 mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 animate-fadeIn">
        <h2 className="text-3xl font-bold text-dark">
          Before Buying A Product Get To Know The <br />
          <span className="text-primary">Opinion Of Our Community</span>
        </h2>
        <p className="text-gray-500 mt-4">
          Get to know the opinion of our community before buying a product.
          <br /> Help others make informed decisions with your review.
        </p>
      </div>

      {/* Cards Grid */}
      <div className=" mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-light rounded-lg shadow-md p-6 text-center hover:shadow-xl hover:-translate-y-2 transition-transform duration-500 animate-fadeUp"
          >
            {/* Icon or Image */}
            <div className="flex items-center justify-center mb-4">
              {card.icon || (
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-24 h-24 object-cover rounded-full"
                />
              )}
            </div>
            <h3 className="text-xl font-semibold text-dark">{card.title}</h3>
            <p className="text-dark mt-2">{card.description}</p>
            <a
              href={card.link}
              className="text-primary font-medium mt-4 inline-block hover:underline"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
   </div>
  );
};

export default CommunitySection;
