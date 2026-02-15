
import React from 'react';
import { 
  Droplets, 
  Wind, 
  CircleDot, 
  Filter, 
  Activity, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Info
} from 'lucide-react';

const icons = {
  Droplets, 
  Wind, 
  CircleDot, 
  Filter, 
  Activity, 
  MapPin, 
  Phone, 
  Clock, 
  MessageSquare,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Info
};

interface IconProps {
  name: keyof typeof icons;
  className?: string;
  size?: number;
}

export const Icon: React.FC<IconProps> = ({ name, className, size = 24 }) => {
  const LucideIcon = icons[name];
  if (!LucideIcon) return null;
  return <LucideIcon className={className} size={size} />;
};
