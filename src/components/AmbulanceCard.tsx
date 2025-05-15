import React from 'react';
import { MapPin, Clock, Phone, AlertTriangle } from 'lucide-react';
import { Ambulance } from '../types';
import { formatDistanceToNow } from '../utils/dateUtils';

interface AmbulanceCardProps {
  ambulance: Ambulance;
}

const AmbulanceCard: React.FC<AmbulanceCardProps> = ({ ambulance }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'en-route':
        return 'bg-blue-100 text-blue-800';
      case 'offline':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'available':
        return 'Available';
      case 'en-route':
        return 'En Route';
      case 'offline':
        return 'Offline';
      default:
        return status;
    }
  };

  // Handler for Send SMS button
  const handleSendSMS = () => {
    // Example: Open SMS app or trigger backend API
    alert(`Send SMS to ${ambulance.phone}`);
    // You can replace this with an API call or integration with an SMS service
  };

  // Handler for View History button
  const handleViewHistory = () => {
    // Example: Navigate to a history page or open a modal
    alert(`Viewing history for ambulance ID: ${ambulance.id}`);
    // You can replace this with navigation logic or modal display
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className={`px-4 py-2 ${getStatusColor(ambulance.status)}`}>
        <div className="flex justify-between items-center">
          <span className="font-medium">{getStatusText(ambulance.status)}</span>
          <span className="text-xs">
            ID: {ambulance.id}
          </span>
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{ambulance.driver}</h3>
        
        <div className="space-y-2 mb-3">
          <div className="flex items-start">
            <Phone size={16} className="mr-2 mt-1 flex-shrink-0" />
            <span>{ambulance.phone}</span>
          </div>
          <div className="flex items-start">
            <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
            <span>{ambulance.location || 'Unknown location'}</span>
          </div>
          <div className="flex items-start">
            <Clock size={16} className="mr-2 mt-1 flex-shrink-0" />
            <span>Updated {formatDistanceToNow(new Date(ambulance.lastUpdate))}</span>
          </div>
        </div>

        {ambulance.status === 'en-route' && (
          <div className="mt-3 pt-3 border-t border-gray-200">
            <p className="font-medium">Patient: {ambulance.patient}</p>
            <p className="text-sm">To: {ambulance.destination}</p>
            <p className="bg-blue-50 text-blue-700 px-3 py-1 rounded-md mt-2 inline-block">
              ETA: {ambulance.eta}
            </p>
          </div>
        )}

        {ambulance.status === 'offline' && (
          <div className="mt-3 flex items-center text-amber-600">
            <AlertTriangle size={16} className="mr-2" />
            <span className="text-sm">Not responding - please check via SMS</span>
          </div>
        )}

        <div className="mt-4 flex justify-between">
          <button
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm"
            onClick={handleSendSMS}
          >
            Send SMS
          </button>
          <button
            className="px-3 py-1 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors text-sm"
            onClick={handleViewHistory}
          >
            View History
          </button>
        </div>
      </div>
    </div>
  );
};

export default AmbulanceCard;