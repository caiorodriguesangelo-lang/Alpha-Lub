
import { ServiceItem, BusinessInfo } from './types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Alpha Lub Center",
  address: "R. São Fernando, 570 - Jardim Julio, Barueri - SP, 06447-280",
  addressLink: "https://www.google.com/maps/dir/?api=1&destination=R.+S%C3%A3o+Fernando,+570+-+Jardim+Julio,+Barueri+-+SP,+06447-280",
  phone: "(11) 92043-2018",
  whatsapp: "https://wa.me/5511920432018",
  hours: {
    week: "08:00 às 18:00",
    sat: "08:00 às 15:00"
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'oil-change',
    title: 'Troca de Óleo',
    description: 'Lubrificantes de alta performance para a máxima vida útil do seu motor.',
    iconName: 'Droplets'
  },
  {
    id: 'cabin-filter',
    title: 'Filtro de Cabine',
    description: 'Ar puro para você e sua família. Essencial para o bom funcionamento do AC.',
    iconName: 'Wind'
  },
  {
    id: 'brake-fluid',
    title: 'Fluido de Freio',
    description: 'Segurança em primeiro lugar. Troca completa com equipamentos modernos.',
    iconName: 'CircleDot'
  },
  {
    id: 'oil-filter',
    title: 'Filtro de Óleo',
    description: 'Retenção de impurezas para manter o óleo limpo por mais tempo.',
    iconName: 'Filter'
  },
  {
    id: 'air-filter',
    title: 'Filtro de AR',
    description: 'Melhore a queima de combustível e o desempenho do seu veículo.',
    iconName: 'Activity'
  }
];
