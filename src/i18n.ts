import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        "Patient Name": "Patient Name",
        "Phone Number": "Phone Number",
        "Location/Address": "Location/Address",
        "Emergency Type": "Emergency Type",
        "Medical Emergency": "Medical Emergency",
        "Accident": "Accident",
        "Pregnancy/Childbirth": "Pregnancy/Childbirth",
        "Cardiac Issue": "Cardiac Issue",
        "Other": "Other",
        "Preferred Language": "Preferred Language",
        "Description (optional)": "Description (optional)",
        "Briefly describe the emergency...": "Briefly describe the emergency...",
        "Request Ambulance": "Request Ambulance",
        "Submitting...": "Submitting...",
        "Ambulance request submitted successfully!": "Ambulance request submitted successfully!",
        "You will receive an SMS confirmation shortly.": "You will receive an SMS confirmation shortly."
      }
    },
    hi: {
      translation: {
        "Patient Name": "रोगी का नाम",
        "Phone Number": "फ़ोन नंबर",
        "Location/Address": "स्थान/पता",
        "Emergency Type": "आपातकालीन प्रकार",
        "Medical Emergency": "चिकित्सा आपातकाल",
        "Accident": "दुर्घटना",
        "Pregnancy/Childbirth": "गर्भावस्था/प्रसव",
        "Cardiac Issue": "हृदय संबंधी समस्या",
        "Other": "अन्य",
        "Preferred Language": "पसंदीदा भाषा",
        "Description (optional)": "विवरण (वैकल्पिक)",
        "Briefly describe the emergency...": "आपातकाल का संक्षिप्त विवरण दें...",
        "Request Ambulance": "एम्बुलेंस बुलाएँ",
        "Submitting...": "प्रेषित किया जा रहा है...",
        "Ambulance request submitted successfully!": "एम्बुलेंस अनुरोध सफलतापूर्वक भेजा गया!",
        "You will receive an SMS confirmation shortly.": "आपको शीघ्र ही एसएमएस पुष्टिकरण प्राप्त होगा।"
      }
    },
    kn: {
      translation: {
        "Patient Name": "ರೋಗಿಯ ಹೆಸರು",
        "Phone Number": "ಫೋನ್ ಸಂಖ್ಯೆ",
        "Location/Address": "ಸ್ಥಳ/ವಿಳಾಸ",
        "Emergency Type": "ತುರ್ತು ಪ್ರಕಾರ",
        "Medical Emergency": "ವೈದ್ಯಕೀಯ ತುರ್ತು",
        "Accident": "ಅಪಘಾತ",
        "Pregnancy/Childbirth": "ಗರ್ಭಧಾರಣೆ/ಹುಟ್ಟುಹಬ್ಬ",
        "Cardiac Issue": "ಹೃದಯ ಸಮಸ್ಯೆ",
        "Other": "ಇತರೆ",
        "Preferred Language": "ಆದ್ಯತೆಯ ಭಾಷೆ",
        "Description (optional)": "ವಿವರಣೆ (ಐಚ್ಛಿಕ)",
        "Briefly describe the emergency...": "ತುರ್ತು ಪರಿಸ್ಥಿತಿಯನ್ನು ಸಂಕ್ಷಿಪ್ತವಾಗಿ ವಿವರಿಸಿ...",
        "Request Ambulance": "ಆಂಬ್ಯುಲೆನ್ಸ್ ಕೋರಿಕೆ",
        "Submitting...": "ಸಲ್ಲಿಸಲಾಗುತ್ತಿದೆ...",
        "Ambulance request submitted successfully!": "ಆಂಬ್ಯುಲೆನ್ಸ್ ವಿನಂತಿಯನ್ನು ಯಶಸ್ವಿಯಾಗಿ ಸಲ್ಲಿಸಲಾಗಿದೆ!",
        "You will receive an SMS confirmation shortly.": "ನೀವು ಶೀಘ್ರದಲ್ಲೇ ಎಸ್‌ಎಂಎಸ್ ದೃಢೀಕರಣವನ್ನು ಸ್ವೀಕರಿಸುತ್ತೀರಿ."
      }
    }
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;