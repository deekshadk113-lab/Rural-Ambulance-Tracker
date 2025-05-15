
export interface Ambulance {
  id: string;
  driver: string;
  phone: string;
  status: string;
  lastUpdate: string;
  location: string;
  patient?: string;
  destination?: string;
  eta?: string;
  latitude: number | null;
  longitude: number | null;
}
export interface EmergencyRequest {
  id: string;
  patientName: string;
  phoneNumber: string;
  location: string;
  emergencyType: 'medical' | 'accident' | 'pregnancy' | 'cardiac' | 'other';
  description?: string;
  language: string;
  status: 'pending' | 'assigned' | 'completed' | 'cancelled';
  createdAt: string;
  assignedAmbulanceId?: string;
}

export interface SOSRelay {
  id: string;
  relayerName: string;
  relayerPhone: string;
  patientName: string;
  patientLocation: string;
  emergencyDetails: string;
  relationToPatient: string;
  status: 'pending' | 'processing' | 'completed';
  createdAt: string;
}

export interface SMSMessage {
  id: string;
  to: string;
  from: string;
  body: string;
  direction: 'inbound' | 'outbound';
  status: 'sent' | 'delivered' | 'failed';
  timestamp: string;
}