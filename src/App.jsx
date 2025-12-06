import React, { useState } from 'react';
import { Factory, Droplet, Wind, Flame } from 'lucide-react';
import './App.css';
import Footer from './component/Footer';
import ContactSection from './component/ContactSection';
import AboutSection from './component/AboutSection';
import ServicesGrid from './component/ServicesGrid';
import HeroSection from './component/HeroSection';
import Header from './component/Header';

// Data Layer
const servicesData = [
  {
    id: 'pretreatment',
    title: 'Pretreatment Solutions',
    description: 'Essential surface preparation for optimal coating adhesion and longevity',
    icon: Droplet,
    color: 'blue',
    services: [
      {
        name: 'Dip-Pretreatment',
        description: 'Complete immersion cleaning for complex geometries and hard-to-reach areas'
      },
      {
        name: 'Spray Pretreatment',
        description: 'High-pressure spray systems for efficient large-scale surface preparation'
      },
      {
        name: 'Shot/Sand Blasting',
        description: 'Mechanical surface preparation for superior coating adhesion'
      }
    ]
  },
  {
    id: 'drying',
    title: 'Drying Systems',
    description: 'Advanced thermal processing for moisture removal and curing',
    icon: Flame,
    color: 'orange',
    services: [
      {
        name: 'Water Drying Oven (W.D.O)',
        description: 'Precision temperature control for complete water evaporation'
      },
      {
        name: 'Paint Drying Oven (P.D.O)',
        description: 'Optimized curing conditions for durable paint finishes'
      },
      {
        name: 'Cooling Zone',
        description: 'Controlled cooling for thermal stability and quality assurance'
      }
    ]
  },
  {
    id: 'coating',
    title: 'Coating Applications',
    description: 'State-of-the-art coating technologies for superior finish quality',
    icon: Wind,
    color: 'green',
    services: [
      {
        name: 'Powder Coating Booth',
        description: 'Electrostatic powder application for durable, eco-friendly finishes'
      },
      {
        name: 'Liquid Paint Booth',
        description: 'Precision liquid coating with advanced ventilation systems'
      }
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure & Systems',
    description: 'Complete material handling and environmental control systems',
    icon: Factory,
    color: 'purple',
    services: [
      {
        name: 'Environmental Room',
        description: 'Climate-controlled environment for consistent coating quality'
      },
      {
        name: 'Conveyor System',
        description: 'Automated material handling for efficient production flow'
      }
    ]
  }
];

const companyInfo = {
  name: 'AURORA',
  tagline: 'Excellence in Surface Treatment & Coating Solutions',
  description: 'Leading provider of comprehensive industrial coating services, delivering quality finishes with cutting-edge technology and expert craftsmanship.',
  phones: ['+91 9731948010', '+91 7676129196'],
  email: 'Marketing@aurorasurfacecoating.com',
  address: '418/760/41, behind SBI BANK, Kannika Nagar, DINNE, Kachanayakanahalli, Bommasandra, Bengaluru, Karnataka 560099',
  googleMapsLink: 'https://maps.google.com/?q=418/760/41,behind+SBI+BANK,Kannika+Nagar,DINNE,Kachanayakanahalli,Bommasandra,Bengaluru,Karnataka+560099',
  logoUrl: 'https://i.postimg.cc/sXJ7nM63/aurora-logo.png' // Replace with actual logo URL
};

const aboutData = {
  title: "Why Choose Aurora?",
  text: "With years of expertise in industrial surface treatment and coating applications, we deliver exceptional quality through advanced technology and meticulous attention to detail.",
  features: [
    'State-of-the-art coating facilities',
    'Experienced technical team',
    'Quality-assured processes',
    'Environmentally conscious operations',
    'Custom solutions for diverse industries'
  ]
};


const App = () => {
  return (
    <div className="app">
      <Header
        companyInfo={companyInfo}
      />
      <HeroSection
        companyInfo={companyInfo}
      />
      <ServicesGrid
        servicesData={servicesData}
      />
      <AboutSection aboutData={aboutData} />

      <ContactSection
        companyInfo={companyInfo}
      />
      {/* <Footer /> */}
      <Footer
        companyInfo={companyInfo}
      />
    </div>
  );
};

export default App;