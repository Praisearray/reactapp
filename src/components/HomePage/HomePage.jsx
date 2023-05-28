import React from "react";
import "./HomePage.scss";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import DescriptionIcon from "@mui/icons-material/Description";
import PaymentsIcon from "@mui/icons-material/Payments";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import Card from "../Card/Card";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import SliderCard from "../SliderCard/SliderCard";
import nodejsIcon from "../../assets/nodejs-icon.png";
import reactIcon from "../../assets/react-icon.png";
import angularIcon from "../../assets/angular-icon.png";
import vuejsIcon from "../../assets/vuejs-icon.png";
import ServiceCard from "../ServiceCard/ServiceCard";
import LanguageIcon from "@mui/icons-material/Language";
import WebIcon from "@mui/icons-material/Web";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import CoPresentIcon from "@mui/icons-material/CoPresent";
import MoveDownIcon from "@mui/icons-material/MoveDown";
import DomainVerificationIcon from "@mui/icons-material/DomainVerification";

function HomePage() {
  const cards = [
    {
      title: "Pixel Perfect Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <DesignServicesIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Full Documentation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <DescriptionIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Reasonable Pricing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <PaymentsIcon sx={{ fontSize: "50px" }} />,
    },
    {
      title: "Happy Clients",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <InsertEmoticonIcon sx={{ fontSize: "50px" }} />,
    },
  ];
  const technologies = [
    {
      title: "Node JS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      image: nodejsIcon,
    },
    {
      title: "React JS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      image: reactIcon,
    },
    {
      title: "Angular JS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      image: angularIcon,
    },
    {
      title: "Vue JS",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      image: vuejsIcon,
    },
  ];
  const services = [
    {
      title: "Website Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <LanguageIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Technical Support",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <SupportAgentIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Web Accessibility",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <WebIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Trainings",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <CoPresentIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "Migration of JS Frameworks",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
      icon: <MoveDownIcon sx={{ fontSize: "70px" }} />,
    },
    {
      title: "UI Test Automation",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices",
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
            <div className="home-card">
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
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              natus sapiente provident iste, veniam cupiditate voluptatem
              dolorum commodi error dolores laborum totam impedit facere eius
              quaerat delectus optio. Quibusdam dolores repellat voluptas
              excepturi, saepe earum labore deleniti temporibus sit in.
            </p>
          </div>
          <div className="sub-info-container">
            <div className="sub-info">
              <h4>Creative Solutions</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, beatae.
              </p>
            </div>
            <div className="sub-info">
              <h4>Clean code</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Deserunt, beatae.
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
    </div>
  );
}

export default HomePage;
