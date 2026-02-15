
export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BusinessInfo {
  name: string;
  address: string;
  addressLink: string;
  phone: string;
  whatsapp: string;
  hours: {
    week: string;
    sat: string;
  };
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
