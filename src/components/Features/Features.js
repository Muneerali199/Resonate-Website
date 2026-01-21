import React from 'react';
import './Features.css';
import featureImage1 from '../../assets/roomscreen.png';
import featureImage2 from '../../assets/createrooms.png';
import featureImage3 from '../../assets/pairchat.png';
import featureImage4 from '../../assets/chatscreen.png';

const featuresData = [
  {
    id: 1,
    title: "Real-time Audio Communication",
    description: "Join rooms and talk to people from all over the world with crystal clear, low-latency audio.",
    image: featureImage1,
    align: "left"
  },
  {
    id: 2,
    title: "Create & Moderate Rooms",
    description: "Take control of your community. Create events, invite speakers, and manage your audience with advanced moderation tools.",
    image: featureImage2,
    align: "right"
  },
  {
    id: 3,
    title: "Random Pair Chatting",
    description: "Feeling adventurous? Use our smart matching system to find random partners and start a conversation instantly.",
    image: featureImage3,
    align: "left"
  },
  {
    id: 4,
    title: "Real-time Messaging",
    description: "Stay connected beyond voice. Share text, reactions, and files in real-time within your rooms.",
    image: featureImage4,
    align: "right"
  }
];

const Features = () => {
  return (
    <section className="features">
      <div className="features-header">
        <h2>Powerful Features</h2>
        <p>Everything you need to build a thriving audio community.</p>
      </div>
      
      <div className="features-container">
        {featuresData.map((feature) => (
          <div key={feature.id} className={`feature-row ${feature.align === 'right' ? 'reverse' : ''}`}>
            
            <div className="feature-image-wrapper">
               {/* Full Image Display */}
              <div className="feature-image-full">
                <img src={feature.image} alt={feature.title} />
              </div>
              {/* Decorative Elements */}
              <div className="feature-blob"></div>
            </div>

            <div className="feature-text-content">
              <div className="feature-number">0{feature.id}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
