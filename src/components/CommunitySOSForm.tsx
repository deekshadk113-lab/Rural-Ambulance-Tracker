import React, { useState } from 'react';
import { Users, MessageSquare, Phone } from 'lucide-react';

const CommunitySOSForm: React.FC = () => {
  const [formData, setFormData] = useState({
    relayerName: '',
    relayerPhone: '',
    patientName: '',
    patientLocation: '',
    emergencyDetails: '',
    relationToPatient: 'neighbor',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "relayerPhone") {
      // Allow only digits, max 10
      const digitsOnly = value.replace(/\D/g, '').slice(0, 10);
      setFormData(prev => ({ ...prev, [name]: digitsOnly }));
      return;
    }

    if (name === "relayerName" || name === "patientName") {
      // Allow only alphabets and spaces
      const alphabetsOnly = value.replace(/[^a-zA-Z\s]/g, '');
      setFormData(prev => ({ ...prev, [name]: alphabetsOnly }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          relayerName: '',
          relayerPhone: '',
          patientName: '',
          patientLocation: '',
          emergencyDetails: '',
          relationToPatient: 'neighbor',
        });
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
          <p className="font-medium">Community SOS request submitted successfully!</p>
          <p className="text-sm mt-1">A community health worker will contact you shortly.</p>
        </div>
      ) : (
        <>
          <div className="bg-amber-50 border border-amber-200 rounded-md p-4 text-amber-700 mb-4">
            <h3 className="font-medium flex items-center">
              <Users size={18} className="mr-2" />
              Community SOS Relay
            </h3>
            <p className="text-sm mt-1">
              Use this form when the patient cannot make a call themselves due to limited connectivity or no phone balance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your Name (Relayer)
              </label>
              <input
                type="text"
                name="relayerName"
                value={formData.relayerName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone size={16} className="inline mr-1" />
                Your Phone Number
              </label>
              <input
                type="tel"
                name="relayerPhone"
                value={formData.relayerPhone}
                onChange={handleChange}
                placeholder="+91 XXXXX XXXXX"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
                maxLength={10}
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Patient's Name
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Relation to Patient
              </label>
              <select
                name="relationToPatient"
                value={formData.relationToPatient}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="neighbor">Neighbor</option>
                <option value="family">Family Member</option>
                <option value="friend">Friend</option>
                <option value="community-worker">Community Worker</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Patient's Location
            </label>
            <input
              type="text"
              name="patientLocation"
              value={formData.patientLocation}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
              placeholder="Village, Landmark, or Address"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MessageSquare size={16} className="inline mr-1" />
              Emergency Details
            </label>
            <textarea
              name="emergencyDetails"
              value={formData.emergencyDetails}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder="Describe the emergency situation..."
              required
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-md text-white ${
                isSubmitting ? 'bg-gray-400' : 'bg-amber-600 hover:bg-amber-700'
              } transition-colors`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Community SOS'}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default CommunitySOSForm;