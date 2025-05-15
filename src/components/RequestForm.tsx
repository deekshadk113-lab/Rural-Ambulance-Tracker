import React, { useState } from 'react';
import { Phone, MapPin, AlertCircle, Languages } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'Hindi' },
  { value: 'kn', label: 'Kannada' },
  // Add more languages as needed
];

const RequestForm: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    patientName: '',
    phoneNumber: '',
    location: '',
    emergencyType: 'medical',
    description: '',
    language: 'en',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (name === "language") {
      i18n.changeLanguage(value);
      setFormData(prev => ({ ...prev, language: value }));
      return;
    }

    if (name === "phoneNumber") {
      const digits = value.replace(/\D/g, "").slice(0, 10);
      setFormData(prev => ({ ...prev, phoneNumber: digits }));
      return;
    }

    if (name === "patientName") {
      const alpha = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData(prev => ({ ...prev, patientName: alpha }));
      return;
    }

    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);

      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          patientName: '',
          phoneNumber: '',
          location: '',
          emergencyType: 'medical',
          description: '',
          language: formData.language,
        });
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {isSuccess ? (
        <div className="bg-green-50 border border-green-200 rounded-md p-4 text-green-700">
          <p className="font-medium">{t('Ambulance request submitted successfully!')}</p>
          <p className="text-sm mt-1">{t('You will receive an SMS confirmation shortly.')}</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {t('Patient Name')}
              </label>
              <input
                type="text"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
                pattern="[A-Za-z\s]+"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Phone size={16} className="inline mr-1" />
                {t('Phone Number')}
              </label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber ? `+91 ${formData.phoneNumber}` : ""}
                onChange={handleChange}
                placeholder="+91 XXXXXXXXXX"
                className="w-full border border-gray-300 rounded-md px-3 py-2"
                required
                maxLength={14}
                pattern="\+91\s\d{10}"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              <MapPin size={16} className="inline mr-1" />
              {t('Location/Address')}
            </label>
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <AlertCircle size={16} className="inline mr-1" />
                {t('Emergency Type')}
              </label>
              <select
                name="emergencyType"
                value={formData.emergencyType}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                <option value="medical">{t('Medical Emergency')}</option>
                <option value="accident">{t('Accident')}</option>
                <option value="pregnancy">{t('Pregnancy/Childbirth')}</option>
                <option value="cardiac">{t('Cardiac Issue')}</option>
                <option value="other">{t('Other')}</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                <Languages size={16} className="inline mr-1" />
                {t('Preferred Language')}
              </label>
              <select
                name="language"
                value={formData.language}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-3 py-2"
              >
                {languages.map(lang => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              {t('Description (optional)')}
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2"
              placeholder={t('Briefly describe the emergency...')}
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-4 py-2 rounded-md text-white ${
                isSubmitting ? 'bg-gray-400' : 'bg-red-600 hover:bg-red-700'
              } transition-colors`}
            >
              {isSubmitting ? t('Submitting...') : t('Request Ambulance')}
            </button>
          </div>
        </>
      )}
    </form>
  );
};

export default RequestForm;