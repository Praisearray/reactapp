import React from "react";
import "./HomePage.scss";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Card from "../Card/Card";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SliderCard from "../SliderCard/SliderCard";
import ServiceCard from "../ServiceCard/ServiceCard";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

function HomePage() {
  const cards = [
    {
      title: "Pixel Perfect Design",
      desc: "Create visually stunning websites with pixel-perfect designs, ensuring flawless precision and an exceptional user experience.",
      icon: <DesignServicesIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Full Documentation",
      desc: "Complete website documentation for smooth maintenance and seamless updates. Simplify your development process.",
      icon: <DescriptionIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Reasonable Pricing",
      desc: "Unlock the perfect balance of quality and affordability with our reasonable pricing options for exceptional website development.",
      icon: <PaymentsIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Happy Clients",
      desc: "Our satisfied clients are our pride, fueling our commitment to delivering outstanding results and exceeding expectations.",
      icon: <InsertEmoticonIcon sx={{ fontSize: "50px" }} />,
    },
  ];
  const technologies = [
    {
      title: "Node JS",
      desc: "Node.js, a leading tool for web development, offers a scalable and efficient platform for building high-performance websites with JavaScript.",
      image: 'nodejs-icon.png',
    },
    {
      title: "React JS",
      desc: "React.js, a top choice for web development, empowers developers to create dynamic and interactive user interfaces with reusable components.",
      image: 'react-icon.png',
    },
    {
      title: "Angular JS",
      desc: "AngularJS: A powerful framework for dynamic single-page applications, simplifying web development with rich features and seamless integration.",
      image: 'angular-icon.png',
    },
    {
      title: "Vue JS",
      desc: "Vue.js, a versatile tool for website development, enables developers to build interactive and scalable user interfaces with ease and flexibility.",
      image: 'vuejs-icon.png',
    },
  ];
  const services = [
    {
      title: "Web Application Development",
      desc: "Unleash your digital presence with our exceptional website development services. Elevate your online success today!",
      icon: <LanguageIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Technical Support",
      desc: "Stay ahead with our reliable technical support for seamless website maintenance. Empowering your online presence!",
      icon: <SupportAgentIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Web Accessibility",
      desc: "Enhance inclusivity with our Web Accessibility solutions, ensuring equal access to your website. Empower every user!",
      icon: <WebIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Trainings",
      desc: "Expand your expertise with our comprehensive JS frameworks training. Unlock new possibilities in web development!",
      icon: <CoPresentIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "UI Upgradation",
      desc: "Enhance your web development capabilities with our expert JS framework upgrades. Stay ahead of the curve!",
      icon: <MoveDownIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "UI Test Automation",
      desc: "Streamline your development process with our efficient UI test automation solutions. Optimize your website performance!",
      icon: <DomainVerificationIcon sx={{ fontSize: "70px" }} />,
    },
  ];
  return (
    <div className="home-page-container">
      <div className="home-image-container">
        <div className="home-tagline">
          <h1 className="main-text">We Create Elegant Solutions</h1>
          <p className="sub-text">
            Unleashing the Power of Frontend for Seamless Digital Experiences
          </p>
        </div>
      </div>
      <div className="home-page-cards">
        {cards.map((card, index) => {
          return (
            <div className="home-card" key={`home-card-${index}`}>
              <Card
                key={`${card.title}-${index}`}
                cardTitle={card.title}
                cardDesc={card.desc}
                cardIcon={card.icon}
              />
            </div>
          );
        })}
      </div>
      <div className="home-info-container">
        <div className="home-info-content">
          <div className="main-info">
            <p className="main-info-header">
              Easy way to build perfect websites
            </p>
            <h2>Smart, Curious, Hands On.</h2>
            <p className="info-content">
              Unlock the effortless path to building flawless websites. Harness
              powerful tools, intuitive interfaces, and expert guidance to
              create stunning online experiences effortlessly and efficiently.
              Start crafting your dream website today. Transform your vision
              into reality with our comprehensive web development solutions!
            </p>
          </div>
          <div className="sub-info-container">
            <div className="sub-info">
              <h4>Creative Solutions</h4>
              <p>
                Unleash your creativity with our innovative web solutions that
                captivate and inspire.
              </p>
            </div>
            <div className="sub-info">
              <h4>Clean code</h4>
              <p>
                Experience the power of clean code for efficient and optimal
                website performance.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="our-offerings">
        <h2 className="offerings-title">Our Offerings</h2>
        <div className="offerings">
          {services.map((service, index) => {
            return (
              <div className="offering-card" key={`${service.title}-${index}`}>
                <ServiceCard
                  serviceCardIcon={service.icon}
                  serviceCardTitle={service.title}
                  serviceCardDesc={service.desc}
                />
              </div>
            );
          })}
        </div>
      </div>
      <div className="technologies-section">
        <h2>Our Expertise</h2>
        <p>
          <FormatQuoteIcon className="start-quote" />
          JavaScript: Embrace the Language that Rules the Web{" "}
          <FormatQuoteIcon />
        </p>
        <div className="technologies">
          {technologies.map((tech, index) => {
            return (
              <SliderCard
                key={`${tech.title}-${index}`}
                image={tech.image}
                title={tech.title}
                desc={tech.desc}
              />
            );
          })}
        </div>
      </div>
      <WhyChooseUs />
    </div>
  );
}

export default HomePage;
