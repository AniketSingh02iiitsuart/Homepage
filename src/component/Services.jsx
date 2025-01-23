import React from 'react';
import './Services.scss';

const Services = () => {
  const servicesData = [
    { title: 'Intelligent Responses', items: ['Feature 1', 'Feature 2', 'Feature 3'] },
    { title: 'Efficient Designs', items: ['Feature 4', 'Feature 5', 'Feature 6'] },
    { title: 'Reliable Tech', items: ['Feature 7', 'Feature 8', 'Feature 9'] },
  ];

  return (
    <section id="services" className="services">
      <h2>Services</h2>
      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div key={index} className="service-card">
            <h3>{service.title}</h3>
            <ul>
              {service.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
