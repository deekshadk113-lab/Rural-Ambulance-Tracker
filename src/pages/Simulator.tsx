import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SMSSimulator from '../components/SMSSimulator';
import CommunitySOSForm from '../components/CommunitySOSForm';

const Simulator: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">SMS Communication Simulator</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <SMSSimulator />
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Community SOS Relay</h2>
            <CommunitySOSForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Simulator;