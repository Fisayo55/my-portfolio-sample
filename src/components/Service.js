import React from "react";
import styles from "../styles/service.module.css"; // Assuming you are using CSS Modules

const services = [
  {
    title: "General Programming",
    description:
      "Custom software development tailored to your needs, from small scripts to complex algorithms.",
    imgSrc: "/images/programming.jpg", // Update with actual image path
  },
  {
    title: "Web Development",
    description:
      "Full-stack web development services, including responsive website design, front-end, and back-end development.",
    imgSrc: "/images/web-development.jpg", // Update with actual image path
  },
  {
    title: "Mobile App Development",
    description:
      "Build high-quality mobile applications for iOS and Android, focusing on user-friendly design and performance.",
    imgSrc: "/images/mobile-app.jpg", // Update with actual image path
  },
  {
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user interfaces that enhance user experience across all platforms.",
    imgSrc: "/images/ui-ux.jpg", // Update with actual image path
  },
];

const ServicesPage = () => {
  return (
    <div className={styles.servicesContainer}>
      <h1 className={styles.title}>Our Services</h1>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <img
              src={service.imgSrc}
              alt={service.title}
              className={styles.serviceImage}
            />
            <h2 className={styles.serviceTitle}>{service.title}</h2>
            <p className={styles.serviceDescription}>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
