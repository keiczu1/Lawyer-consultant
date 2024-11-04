import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import IntroText from './components/IntroText';
import ConsultationCounter from './components/ConsultationCounter';
import Statistics from './components/Statistics';
import ConsultationInstructions from './components/ConsultationInstructions';
import ConsultationSteps from './components/ConsultationSteps';
import ConsultationTypes from './components/ConsultationTypes';
import LawyersGrid from './components/LawyersGrid';
import PricingTabs from './components/PricingTabs';
import RecentQuestions from './components/RecentQuestions';
import OnlineConsultation from './components/OnlineConsultation';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import LawyerInfo from './components/LawyerInfo';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <IntroText />
      <ConsultationCounter />
      <Statistics />
      <ConsultationInstructions />
      <ConsultationSteps />
      <ConsultationTypes />
      <LawyersGrid />
      <PricingTabs />
      <RecentQuestions />
      <OnlineConsultation />
      <FAQ />
      <CallToAction />
      <LawyerInfo />
      <Footer />
    </div>
  );
}

export default App;