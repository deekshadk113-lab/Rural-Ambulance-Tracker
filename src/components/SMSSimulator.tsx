import React, { useState } from 'react';
import { MessageSquare, Send, RefreshCw } from 'lucide-react';

const translations = {
  english: {
    welcome: 'Welcome to Rural Ambulance Tracker. Send "HELP" followed by your location to request an ambulance.',
    title: 'SMS Simulator',
    placeholder: 'Type an SMS command (e.g., HELP, STATUS)',
    try: 'Try: "HELP at Kolhapur village", "STATUS", "LOCATION update: near temple"',
    responding: 'System is responding...',
    help: `We've received your emergency request. An ambulance is being dispatched to your location. Your tracking code is #AMB-{code}. Reply with "STATUS" to check ETA.`,
    status: `Your ambulance is approximately 12 minutes away. Driver Rajesh (Ph: +91-98765-43210) is en route. Reply "CANCEL" to cancel the request.`,
    location: `Thank you for the location update. Your information has been sent to the ambulance driver.`,
    unknown: `I'm sorry, I didn't understand that command. Please send "HELP" followed by your location for emergency assistance, or "STATUS" to check your ambulance status.`
  },
  hindi: {
    welcome: 'ग्रामीण एम्बुलेंस ट्रैकर में आपका स्वागत है। एम्बुलेंस का अनुरोध करने के लिए "HELP" के बाद अपना स्थान भेजें।',
    title: 'एसएमएस सिम्युलेटर',
    placeholder: 'एसएमएस कमांड टाइप करें (जैसे, HELP, STATUS)',
    try: 'कोशिश करें: "HELP at Kolhapur village", "STATUS", "LOCATION update: near temple"',
    responding: 'सिस्टम उत्तर दे रहा है...',
    help: `हमें आपका आपातकालीन अनुरोध प्राप्त हुआ है। आपके स्थान पर एक एम्बुलेंस भेजी जा रही है। आपका ट्रैकिंग कोड #AMB-{code} है। ETA की जांच के लिए "STATUS" के साथ जवाब दें।`,
    status: `आपकी एम्बुलेंस लगभग 12 मिनट दूर है। ड्राइवर राजेश (फोन: +91-98765-43210) रास्ते में है। अनुरोध रद्द करने के लिए "CANCEL" का जवाब दें।`,
    location: `स्थान अपडेट के लिए धन्यवाद। आपकी जानकारी एम्बुलेंस ड्राइवर को भेज दी गई है।`,
    unknown: `मुझे खेद है, मैं उस आदेश को नहीं समझा। कृपया आपातकालीन सहायता के लिए "HELP" के बाद अपना स्थान भेजें, या अपनी एम्बुलेंस की स्थिति जांचने के लिए "STATUS" भेजें।`
  },
  kannada: {
    welcome: 'ಗ್ರಾಮೀಣ ಆಂಬ್ಯುಲೆನ್ಸ್ ಟ್ರ್ಯಾಕರ್‌ಗೆ ಸ್ವಾಗತ. ಆಂಬ್ಯುಲೆನ್ಸ್‌ಗಾಗಿ "HELP" ಅನ್ನು ನಿಮ್ಮ ಸ್ಥಳದೊಂದಿಗೆ ಕಳುಹಿಸಿ.',
    title: 'ಎಸ್‌ಎಂಎಸ್ ಸಿಮ್ಯುಲೇಟರ್',
    placeholder: 'ಎಸ್‌ಎಂಎಸ್ ಕಮಾಂಡ್ ಟೈಪ್ ಮಾಡಿ (ಉದಾ: HELP, STATUS)',
    try: 'ಪ್ರಯತ್ನಿಸಿ: "HELP at Kolhapur village", "STATUS", "LOCATION update: near temple"',
    responding: 'ಸಿಸ್ಟಮ್ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತಿದೆ...',
    help: `ನಾವು ನಿಮ್ಮ ತುರ್ತು ವಿನಂತಿಯನ್ನು ಸ್ವೀಕರಿಸಿದ್ದೇವೆ. ನಿಮ್ಮ ಸ್ಥಳಕ್ಕೆ ಆಂಬ್ಯುಲೆನ್ಸ್ ಕಳುಹಿಸಲಾಗಿದೆ. ನಿಮ್ಮ ಟ್ರ್ಯಾಕಿಂಗ್ ಕೋಡ್ #AMB-{code}. ETA ಪರಿಶೀಲಿಸಲು "STATUS" ಎಂದು ಉತ್ತರಿಸಿ.`,
    status: `ನಿಮ್ಮ ಆಂಬ್ಯುಲೆನ್ಸ್ ಸುಮಾರು 12 ನಿಮಿಷಗಳ ದೂರದಲ್ಲಿದೆ. ಚಾಲಕ ರಾಜೇಶ್ (ಫೋನ್: +91-98765-43210) ಮಾರ್ಗದಲ್ಲಿದ್ದಾರೆ. ವಿನಂತಿಯನ್ನು ರದ್ದುಪಡಿಸಲು "CANCEL" ಎಂದು ಉತ್ತರಿಸಿ.`,
    location: `ಸ್ಥಳದ ನವೀಕರಣಕ್ಕಾಗಿ ಧನ್ಯವಾದಗಳು. ನಿಮ್ಮ ಮಾಹಿತಿಯನ್ನು ಆಂಬ್ಯುಲೆನ್ಸ್ ಚಾಲಕರಿಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.`,
    unknown: `ಕ್ಷಮಿಸಿ, ಆ ಆಜ್ಞೆಯನ್ನು ನನಗೆ ಅರ್ಥವಾಗಲಿಲ್ಲ. ತುರ್ತು ಸಹಾಯಕ್ಕಾಗಿ "HELP" ಅನ್ನು ನಿಮ್ಮ ಸ್ಥಳದೊಂದಿಗೆ ಕಳುಹಿಸಿ, ಅಥವಾ ನಿಮ್ಮ ಆಂಬ್ಯುಲೆನ್ಸ್ ಸ್ಥಿತಿಯನ್ನು ಪರಿಶೀಲಿಸಲು "STATUS" ಅನ್ನು ಕಳುಹಿಸಿ.`
  }
};

const SMSSimulator: React.FC = () => {
  const [language, setLanguage] = useState<'english' | 'hindi' | 'kannada'>('english');
  const [messages, setMessages] = useState<Array<{id: string, text: string, sender: 'user' | 'system', timestamp: Date}>>([
    {
      id: '1',
      text: translations['english'].welcome,
      sender: 'system',
      timestamp: new Date(Date.now() - 5 * 60000)
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);

  // When language changes, reset messages with welcome in new language
  const handleLanguageChange = (lang: 'english' | 'hindi' | 'kannada') => {
    setLanguage(lang);
    setMessages([
      {
        id: Date.now().toString(),
        text: translations[lang].welcome,
        sender: 'system',
        timestamp: new Date()
      }
    ]);
  };

  const handleSendMessage = () => {
    if (!inputText.trim()) return;

    const newUserMessage = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user' as const,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInputText('');
    setIsProcessing(true);

    setTimeout(() => {
      let responseText = '';
      const t = translations[language];
      if (inputText.toLowerCase().includes('help')) {
        responseText = t.help.replace('{code}', `${Math.floor(1000 + Math.random() * 9000)}`);
      } else if (inputText.toLowerCase().includes('status')) {
        responseText = t.status;
      } else if (inputText.toLowerCase().includes('location') || inputText.toLowerCase().includes('update')) {
        responseText = t.location;
      } else {
        responseText = t.unknown;
      }

      const newSystemMessage = {
        id: (Date.now() + 1).toString(),
        text: responseText,
        sender: 'system' as const,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, newSystemMessage]);
      setIsProcessing(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <MessageSquare size={20} className="mr-2" />
          <h2 className="font-medium">{translations[language].title}</h2>
        </div>
        <div>
          <select 
            value={language} 
            onChange={(e) => handleLanguageChange(e.target.value as 'english' | 'hindi' | 'kannada')}
            className="text-sm bg-blue-700 text-white border border-blue-500 rounded px-2 py-1"
          >
            <option value="english">English</option>
            <option value="hindi">Hindi</option>
            <option value="kannada">Kannada</option>
          </select>
        </div>
      </div>
      
      <div className="h-80 overflow-y-auto p-4 bg-gray-50">
        {messages.map(message => (
          <div 
            key={message.id}
            className={`mb-3 max-w-xs rounded-lg p-3 ${
              message.sender === 'user' 
                ? 'bg-blue-100 text-blue-900 ml-auto' 
                : 'bg-gray-200 text-gray-800'
            }`}
          >
            <p className="text-sm">{message.text}</p>
            <p className="text-xs text-gray-500 mt-1">
              {message.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
            </p>
          </div>
        ))}
        
        {isProcessing && (
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <RefreshCw size={14} className="mr-2 animate-spin" />
            <span>{translations[language].responding}</span>
          </div>
        )}
      </div>
      
      <div className="p-3 border-t border-gray-200">
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center"
        >
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder={translations[language].placeholder}
            className="flex-grow border border-gray-300 rounded-l-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
          >
            <Send size={18} />
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-2">
          {translations[language].try}
        </p>
      </div>
    </div>
  );
};

export default SMSSimulator;