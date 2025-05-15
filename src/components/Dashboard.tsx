import React, { useState } from 'react';
import { MapPin, Clock, MessageCircle, Phone, User, Activity } from 'lucide-react';
import AmbulanceCard from './AmbulanceCard';
import StatsCard from './StatsCard';
import RequestForm from './RequestForm';
import { Ambulance } from '../types';

const mockAmbulances: Ambulance[] = [
  {
    id: '1',
    driver: 'Rajesh Kumar',
    phone: '+91 98765 43210',
    status: 'available',
    lastUpdate: new Date().toISOString(),
    location: 'Ramanathapuram, Tamil Nadu',
    latitude: 9.3707,
    longitude: 78.8308,
  },
  {
    id: '2',
    driver: 'Priya Singh',
    phone: '+91 87654 32109',
    status: 'en-route',
    lastUpdate: new Date(Date.now() - 15 * 60000).toISOString(),
    location: 'Kolhapur, Maharashtra',
    patient: 'Amit Sharma',
    destination: 'Community Health Center, Kolhapur',
    eta: '12 minutes',
    latitude: 16.7050,
    longitude: 74.2433,
  },
  {
    id: '3',
    driver: 'Manasa Sugas',
    phone: '+91 7899846573',
    status: 'offline',
    lastUpdate: new Date(Date.now() - 3 * 3600000).toISOString(),
    location: 'Unknown',
    latitude: null,
    longitude: null,
  },
];

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ambulances' | 'requests' | 'stats'>('ambulances');
  
  return (
    <main className="flex-grow container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <div className="flex overflow-x-auto">
          <button
            className={`px-4 py-2 mr-2 whitespace-nowrap rounded-md transition-colors ${
              activeTab === 'ambulances' ? 'bg-red-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab('ambulances')}
          >
            <MapPin size={16} className="inline-block mr-2" />
            Ambulances
          </button>
          <button
            className={`px-4 py-2 mr-2 whitespace-nowrap rounded-md transition-colors ${
              activeTab === 'requests' ? 'bg-red-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab('requests')}
          >
            <MessageCircle size={16} className="inline-block mr-2" />
            New Request
          </button>
          <button
            className={`px-4 py-2 whitespace-nowrap rounded-md transition-colors ${
              activeTab === 'stats' ? 'bg-red-600 text-white' : 'bg-gray-100'
            }`}
            onClick={() => setActiveTab('stats')}
          >
            <Activity size={16} className="inline-block mr-2" />
            Stats
          </button>
        </div>
      </div>

      {activeTab === 'ambulances' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mockAmbulances.map(ambulance => (
            <AmbulanceCard key={ambulance.id} ambulance={ambulance} />
          ))}
        </div>
      )}

      {activeTab === 'requests' && (
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Request an Ambulance</h2>
          <RequestForm />
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <StatsCard 
            title="Active Ambulances" 
            value="2" 
            icon={<MapPin size={20} className="text-blue-500" />} 
            change="+1 from yesterday"
            trend="up"
          />
          <StatsCard 
            title="Average Response Time" 
            value="18 min" 
            icon={<Clock size={20} className="text-orange-500" />} 
            change="-3 min from last week"
            trend="down"
          />
          <StatsCard 
            title="Total Requests Today" 
            value="8" 
            icon={<MessageCircle size={20} className="text-green-500" />} 
            change="+2 from yesterday"
            trend="up"
          />
          <StatsCard 
            title="Community Relays" 
            value="3" 
            icon={<Phone size={20} className="text-purple-500" />} 
            change="Same as yesterday"
            trend="neutral"
          />
          <StatsCard 
            title="People Served" 
            value="124" 
            icon={<User size={20} className="text-indigo-500" />} 
            change="+8 this week"
            trend="up"
          />
          <StatsCard 
            title="Offline Hours" 
            value="2.4" 
            icon={<Activity size={20} className="text-red-500" />} 
            change="-0.8 from last week"
            trend="down"
          />
        </div>
      )}
    </main>
  );
};

export default Dashboard;