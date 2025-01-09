import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WelcomeSection } from "./components/WelcomeSection";

const page = () => {
  const heroData = {
    badge: {
      icon: "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/2fd91ae3f0fe28382611b3cf3f1c36e74470cb3310ef6ad104d2e36ec8139a46?apiKey=7d86919144c846178294e9d8a4321223&",
      text: "Benefits of team coaching",
      linkText: "Explore more",
      linkIcon:
        "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/b9459871b93817d6bf6807286747f7dc087f5036d3ed826609f1aea645e845f5?apiKey=7d86919144c846178294e9d8a4321223&",
    },
    title: "Empowering The World\nThrough Coaching",
    description:
      "World-Leading, Independent Accreditation Body for Coaching, Mentoring & Professional Supervision",
    ctaText: "Let's Go",
    heroImage:
      "https://cdn.builder.io/api/v1/image/assets/06aa3e4feb1a44b58f93292c617c0ab1/ca5fd44863e3ab51cc608c5d731c71c623e0e1bdef2f3b2eaacb3c73f3c823fc?apiKey=7d86919144c846178294e9d8a4321223&",
  };
  return (
    <>
      <HeroSection {...heroData} />
      <WelcomeSection />
    </>
  );
};

export default page;
